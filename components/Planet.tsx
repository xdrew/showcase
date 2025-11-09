'use client';

import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { Project } from '@/data/projects';
import { useStore } from '@/lib/store';

interface PlanetProps {
  project: Project;
  position: [number, number, number];
  color: string;
  size?: number;
}

export function Planet({ project, position, color, size = 0.5 }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  const setHoveredProject = useStore((state) => state.setHoveredProject);
  const setSelectedProject = useStore((state) => state.setSelectedProject);
  const rocketPosition = useStore((state) => state.rocketPosition);

  // Generate planet type based on project ID for consistency
  const planetType = useMemo(() => {
    const hash = project.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const types = ['rocky', 'gas', 'ice', 'lava'];
    return types[hash % types.length];
  }, [project.id]);

  // Generate surface colors based on planet type
  const surfaceColors = useMemo(() => {
    const baseColor = new THREE.Color(color);
    switch (planetType) {
      case 'gas':
        return {
          base: baseColor,
          secondary: baseColor.clone().multiplyScalar(0.7),
          accent: baseColor.clone().multiplyScalar(1.3),
        };
      case 'ice':
        return {
          base: new THREE.Color('#b3e5fc'),
          secondary: new THREE.Color('#e1f5fe'),
          accent: baseColor.clone().multiplyScalar(0.5),
        };
      case 'lava':
        return {
          base: new THREE.Color('#ff5722'),
          secondary: new THREE.Color('#ff9800'),
          accent: new THREE.Color('#ffeb3b'),
        };
      default: // rocky
        return {
          base: baseColor.clone().multiplyScalar(0.6),
          secondary: baseColor.clone().multiplyScalar(0.4),
          accent: baseColor,
        };
    }
  }, [planetType, color]);

  useFrame(({ clock }) => {
    if (!meshRef.current || !groupRef.current) return;

    // Rotate planet on its axis
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.5;

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

    // Scale up when hovered
    const targetScale = hovered ? 1.3 : 1;
    groupRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1
    );
  });

  // Calculate planet size based on contract count
  const planetSize = size * (1 + Math.min(project.contractCount || 1, 30) / 30);

  return (
    <group ref={groupRef} position={position}>
      {/* Planet sphere with type-specific rendering */}
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
        {planetType === 'gas' ? (
          <MeshDistortMaterial
            color={surfaceColors.base}
            emissive={surfaceColors.accent}
            emissiveIntensity={hovered ? 0.4 : 0.2}
            metalness={0.1}
            roughness={0.8}
            distort={0.3}
            speed={1}
          />
        ) : (
          <meshStandardMaterial
            color={surfaceColors.base}
            emissive={surfaceColors.accent}
            emissiveIntensity={hovered ? 0.5 : 0.25}
            metalness={planetType === 'ice' ? 0.6 : 0.3}
            roughness={planetType === 'ice' ? 0.2 : 0.8}
          />
        )}
      </mesh>

      {/* Surface details - craters/spots - only when hovered */}
      {planetType === 'rocky' && hovered && [0, 1].map((i) => {
        const theta = (i * Math.PI * 2) / 2;
        const phi = Math.PI / 3;
        const x = Math.sin(phi) * Math.cos(theta) * planetSize;
        const y = Math.sin(phi) * Math.sin(theta) * planetSize;
        const z = Math.cos(phi) * planetSize;
        return (
          <mesh key={`crater-${i}`} position={[x, y, z]}>
            <sphereGeometry args={[planetSize * 0.15, 6, 6]} />
            <meshStandardMaterial
              color={surfaceColors.secondary}
              emissive={surfaceColors.secondary}
              emissiveIntensity={0.1}
            />
          </mesh>
        );
      })}

      {/* Gas bands - single band only */}
      {planetType === 'gas' && (
        <mesh rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry
            args={[planetSize * 0.95, planetSize * 0.1, 6, 24]}
          />
          <meshStandardMaterial
            color={surfaceColors.secondary}
            emissive={surfaceColors.secondary}
            emissiveIntensity={0.3}
            transparent
            opacity={0.4}
          />
        </mesh>
      )}

      {/* Ice crystals - reduced and only when hovered */}
      {planetType === 'ice' && hovered && [0, 1].map((i) => {
        const angle = i * Math.PI;
        return (
          <mesh
            key={`crystal-${i}`}
            position={[
              Math.cos(angle) * planetSize * 0.8,
              Math.sin(angle) * planetSize * 0.8,
              0
            ]}
          >
            <octahedronGeometry args={[planetSize * 0.1, 0]} />
            <meshStandardMaterial
              color="#ffffff"
              metalness={0.9}
              roughness={0.1}
              emissive="#b3e5fc"
              emissiveIntensity={0.5}
              transparent
              opacity={0.7}
            />
          </mesh>
        );
      })}

      {/* Lava glow spots - reduced */}
      {planetType === 'lava' && [0, 1].map((i) => {
        const theta = i * Math.PI;
        const phi = Math.PI / 3;
        const x = Math.sin(phi) * Math.cos(theta) * planetSize * 0.95;
        const y = Math.sin(phi) * Math.sin(theta) * planetSize * 0.95;
        const z = Math.cos(phi) * planetSize * 0.95;
        return (
          <mesh key={`lava-${i}`} position={[x, y, z]}>
            <sphereGeometry args={[planetSize * 0.2, 6, 6]} />
            <meshStandardMaterial
              color="#ffeb3b"
              emissive="#ffeb3b"
              emissiveIntensity={1.5}
            />
          </mesh>
        );
      })}

      {/* Planet ring for larger projects */}
      {(project.contractCount || 0) > 10 && (
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[planetSize * 1.4, planetSize * 0.1, 8, 32]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.4}
            transparent
            opacity={0.5}
          />
        </mesh>
      )}

      {/* Atmosphere glow - only when hovered */}
      {hovered && (
        <mesh>
          <sphereGeometry args={[planetSize * 1.1, 12, 12]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.2}
            side={THREE.BackSide}
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
