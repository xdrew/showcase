'use client';

import { useRef, useState, useMemo } from 'react';
import { useFrame, extend } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import { Project } from '@/data/projects';
import { useStore } from '@/lib/store';
import { PlanetShaderMaterial } from './PlanetMaterial';

// Register the custom shader material with React Three Fiber
extend({ PlanetShaderMaterial });

interface PlanetProps {
  project: Project;
  position: [number, number, number];
  color: string;
  size?: number;
}

export function Planet({ project, position, color, size = 0.5 }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);

  const setHoveredProject = useStore((state) => state.setHoveredProject);
  const setSelectedProject = useStore((state) => state.setSelectedProject);
  const rocketPosition = useStore((state) => state.rocketPosition);

  // Generate planet type based on project ID and contract count for more variety
  const planetType = useMemo(() => {
    // Use both project ID and contract count for more varied distribution
    const hash = project.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const contractInfluence = (project.contractCount || 1) * 7;
    const combined = hash + contractInfluence;
    const types = ['rocky', 'gas', 'ice', 'lava'];
    return types[combined % types.length];
  }, [project.id, project.contractCount]);

  // Map planet type to shader index
  const planetTypeIndex = useMemo(() => {
    const typeMap: Record<string, number> = { rocky: 0, gas: 1, ice: 2, lava: 3 };
    return typeMap[planetType] || 0;
  }, [planetType]);

  // Generate surface colors based on planet type with more variety
  const surfaceColors = useMemo(() => {
    const baseColor = new THREE.Color(color);
    // Add variation based on project ID
    const hash = project.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const variation = (hash % 10) / 20; // 0 to 0.5 variation

    switch (planetType) {
      case 'gas':
        // Gas giants with varied hues
        const gasHue = baseColor.clone();
        gasHue.offsetHSL(variation - 0.25, 0, 0);
        return {
          base: gasHue,
          secondary: gasHue.clone().multiplyScalar(0.7),
          accent: gasHue.clone().multiplyScalar(1.4 + variation),
        };
      case 'ice':
        // Ice planets with cyan to white variation
        const iceTint = 0.7 + variation * 0.3;
        return {
          base: new THREE.Color(iceTint * 0.7, iceTint * 0.95, iceTint),
          secondary: new THREE.Color(iceTint * 0.88, iceTint * 0.97, iceTint),
          accent: baseColor.clone().multiplyScalar(0.5),
        };
      case 'lava':
        // Lava planets from orange to yellow-white
        const lavaTemp = 0.8 + variation * 0.4;
        return {
          base: new THREE.Color(lavaTemp, lavaTemp * 0.3, 0.1),
          secondary: new THREE.Color(lavaTemp, lavaTemp * 0.6, 0),
          accent: new THREE.Color(lavaTemp, lavaTemp * 0.9, lavaTemp * 0.3),
        };
      default: // rocky
        // Rocky planets with terrain variation
        const rockyBase = baseColor.clone();
        rockyBase.offsetHSL(variation - 0.25, variation * 0.2, 0);
        return {
          base: rockyBase.clone().multiplyScalar(0.5 + variation),
          secondary: rockyBase.clone().multiplyScalar(0.3 + variation * 0.5),
          accent: rockyBase,
        };
    }
  }, [planetType, color, project.id]);

  // Generate unique seed for texture variation
  const textureSeed = useMemo(() => {
    const hash = project.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return (hash % 100) / 100; // 0 to 1
  }, [project.id]);

  useFrame(({ clock }) => {
    if (!meshRef.current || !groupRef.current) return;

    const time = clock.getElapsedTime();

    // Update shader time
    if (materialRef.current) {
      materialRef.current.time = time;
    }

    // Rotate planet on its axis (different speeds for variety)
    meshRef.current.rotation.y = time * 0.3;
    meshRef.current.rotation.x = Math.sin(time * 0.1) * 0.05; // Slight wobble

    // Check distance to rocket for auto-hover
    const distance = Math.sqrt(
      Math.pow(position[0] - rocketPosition[0], 2) +
      Math.pow(position[1] - rocketPosition[1], 2) +
      Math.pow(position[2] - rocketPosition[2], 2)
    );

    // Auto-hover when rocket is close
    if (distance < 3 && !hovered) {
      setHovered(true);
      setHoveredProject(project);
    } else if (distance >= 3 && hovered) {
      setHovered(false);
      setHoveredProject(null);
    }

    // Scale up when hovered with bounce effect
    const targetScale = hovered ? 1.4 : 1;
    groupRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1
    );
  });

  // Calculate planet size based on contract count
  const planetSize = size * (1 + Math.min(project.contractCount || 1, 30) / 30);

  return (
    <group ref={groupRef} position={position}>
      {/* Planet sphere with type-specific rendering - reduced geometry */}
      <mesh
        ref={meshRef}
        onClick={() => setSelectedProject(project)}
        onPointerOver={() => {
          setHovered(true);
          setHoveredProject(project);
        }}
        onPointerOut={() => {
          setHovered(false);
          setHoveredProject(null);
        }}
      >
        <sphereGeometry args={[planetSize, 16, 16]} />
        <planetShaderMaterial
          ref={materialRef}
          baseColor={surfaceColors.base}
          accentColor={surfaceColors.accent}
          planetType={planetTypeIndex}
          seed={textureSeed}
        />
      </mesh>

      {/* Single atmosphere glow layer */}
      <mesh>
        <sphereGeometry args={[planetSize * 1.1, 12, 12]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={hovered ? 0.2 : 0.12}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Ice glow effect - only when hovered */}
      {hovered && planetType === 'ice' && (
        <pointLight
          color="#00ffff"
          intensity={0.8}
          distance={planetSize * 3}
        />
      )}

      {/* Planetary rings for larger projects - flat and varied */}
      {(project.contractCount || 0) > 10 && (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry
            args={[
              planetSize * 1.4,
              planetSize * (1.8 + textureSeed * 0.6), // Varied outer radius
              32
            ]}
          />
          <meshBasicMaterial
            color={textureSeed > 0.5 ? '#f0f0f0' : '#d0d0d0'}
            transparent
            opacity={hovered ? 0.6 : 0.4}
            side={THREE.DoubleSide}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      )}

      {/* Project name label - always visible when hovered */}
      {hovered && (
        <Text
          position={[0, planetSize + 0.8, 0]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          {project.name}
        </Text>
      )}

      {/* Point light from planet */}
      <pointLight
        color={color}
        intensity={hovered ? 1.5 : 0.5}
        distance={10}
      />
    </group>
  );
}
