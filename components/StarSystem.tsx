'use client';

import { useRef, useMemo } from 'react';
import { useFrame, extend } from '@react-three/fiber';
import { Text, shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { Planet } from './Planet';
import { projects, Project } from '@/data/projects';

// Custom shader material for animated star surface
const StarMaterial = shaderMaterial(
  {
    time: 0,
    color: new THREE.Color('#ff6600'),
  },
  // Vertex shader
  `
    varying vec2 vUv;
    varying vec3 vNormal;
    void main() {
      vUv = uv;
      vNormal = normal;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader
  `
    uniform float time;
    uniform vec3 color;
    varying vec2 vUv;
    varying vec3 vNormal;

    // Simple noise function
    float noise(vec2 p) {
      return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
      vec2 uv = vUv * 3.0;

      // Animated surface turbulence
      float n1 = noise(uv + time * 0.1);
      float n2 = noise(uv * 2.0 - time * 0.15);
      float n3 = noise(uv * 4.0 + time * 0.08);

      float turbulence = (n1 + n2 * 0.5 + n3 * 0.25) / 1.75;

      // Edge glow based on view angle
      float fresnel = pow(1.0 - abs(dot(vNormal, vec3(0.0, 0.0, 1.0))), 2.0);

      // Combine effects
      vec3 finalColor = color * (0.8 + turbulence * 0.4);
      finalColor += color * fresnel * 0.5;

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
);

extend({ StarMaterial });

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
      {/* Central star with animated surface */}
      <mesh ref={starRef}>
        <sphereGeometry args={[1.5, 20, 20]} />
        <starMaterial ref={starMaterialRef} color={starColor} toneMapped={false} />
      </mesh>

      {/* Star core glow */}
      <mesh>
        <sphereGeometry args={[1.3, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Star corona with gradient */}
      <mesh>
        <sphereGeometry args={[2, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Star glow rings - enhanced */}
      {[0, 1].map((i) => (
        <mesh key={i}>
          <sphereGeometry args={[2.3 + i * 0.6, 12, 12]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.04 - i * 0.01}
            side={THREE.BackSide}
          />
        </mesh>
      ))}

      {/* Solar flares - reduced to 2 */}
      {[0, 1].map((i) => {
        const angle = i * Math.PI;
        return (
          <mesh
            key={`flare-${i}`}
            position={[
              Math.cos(angle) * 1.7,
              Math.sin(angle) * 1.7,
              0
            ]}
          >
            <sphereGeometry args={[0.15, 6, 6]} />
            <meshBasicMaterial
              color={color}
              transparent
              opacity={0.5}
            />
          </mesh>
        );
      })}

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

      {/* Planets orbiting the star */}
      {categoryProjects.map((project, index) => {
        // Arrange planets in circular orbit
        const angle = (index / categoryProjects.length) * Math.PI * 2;
        const orbitRadius = 5 + Math.random() * 3;
        const orbitHeight = (Math.random() - 0.5) * 2;

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

      {/* Orbital paths visualization - simplified */}
      {[5, 8].map((radius, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[radius, 0.01, 4, 32]} />
          <meshBasicMaterial
            color={color}
            transparent
            opacity={0.08}
          />
        </mesh>
      ))}
    </group>
  );
}
