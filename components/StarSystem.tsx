'use client';

import { useRef, useMemo } from 'react';
import { useFrame, extend } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import { Planet } from './Planet';
import { projects, Project } from '@/data/projects';
import { StarShaderMaterial } from './StarMaterial';

// Register the custom shader material
extend({ StarShaderMaterial });

interface StarSystemProps {
  categoryId: string;
  categoryName: string;
  color: string;
  position: [number, number, number];
}

export function StarSystem({ categoryId, categoryName, color, position }: StarSystemProps) {
  const starRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const starMaterialRef = useRef<any>(null);

  // Get all projects in this category
  const categoryProjects = projects.filter((p) => p.category === categoryId);

  // Convert color string to THREE.Color
  const starColor = useMemo(() => new THREE.Color(color), [color]);

  useFrame(({ clock }) => {
    if (!starRef.current) return;

    // Pulsing star effect
    const time = clock.getElapsedTime();
    const scale = 1 + Math.sin(time * 2) * 0.08;
    starRef.current.scale.setScalar(scale);

    // Update shader time
    if (starMaterialRef.current) {
      starMaterialRef.current.time = time;
    }

    // Gentle rotation of entire system
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Central star with shader surface - reduced geometry */}
      <mesh ref={starRef}>
        <sphereGeometry args={[1.5, 24, 24]} />
        <starShaderMaterial
          ref={starMaterialRef}
          color={starColor}
          time={0}
          toneMapped={false}
          key={`star-material-${categoryId}`}
        />
      </mesh>

      {/* Single corona glow layer */}
      <mesh>
        <sphereGeometry args={[2.2, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.15}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Category name label */}
      <Text
        position={[0, 3, 0]}
        fontSize={0.6}
        color={color}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.03}
        outlineColor="#000000"
      >
        {categoryName}
      </Text>

      {/* Star point light */}
      <pointLight color={color} intensity={5} distance={40} />

      {/* Planets orbiting the star - wider spacing */}
      {categoryProjects.map((project, index) => {
        // Arrange planets in circular orbits with better spacing
        const angle = (index / categoryProjects.length) * Math.PI * 2;
        // Use index-based radius for consistent, wider spacing
        const baseRadius = 4;
        const radiusIncrement = 1.5; // More space between orbits
        const orbitRadius = baseRadius + (index % 4) * radiusIncrement;
        const orbitHeight = Math.sin(index * 0.8) * 3; // More height variation

        const planetPosition: [number, number, number] = [
          Math.cos(angle) * orbitRadius,
          orbitHeight,
          Math.sin(angle) * orbitRadius,
        ];

        return (
          <Planet
            key={project.id}
            project={project}
            position={planetPosition}
            color={color}
            size={0.4}
          />
        );
      })}

      {/* Single orbital path */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[6, 0.01, 4, 24]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.05}
        />
      </mesh>
    </group>
  );
}
