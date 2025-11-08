'use client';

import { useRef, useState, useMemo } from 'react';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import { Sphere, Html } from '@react-three/drei';
import * as THREE from 'three';
import { Project } from '@/data/projects';
import { useStore } from '@/lib/store';

interface NeuronProps {
  project: Project;
  position: [number, number, number];
  color: string;
}

export function Neuron({ project, position, color }: NeuronProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const setSelectedProject = useStore((state) => state.setSelectedProject);
  const setHoveredProject = useStore((state) => state.setHoveredProject);
  const selectedProject = useStore((state) => state.selectedProject);
  const hoveredProject = useStore((state) => state.hoveredProject);

  const isSelected = selectedProject?.id === project.id;
  const isHovered = hoveredProject?.id === project.id;

  // Calculate size based on contract count (more contracts = larger neuron)
  const size = useMemo(() => {
    const baseSize = 0.15;
    const scale = project.contractCount ? Math.log(project.contractCount + 1) * 0.08 : 0;
    return baseSize + scale;
  }, [project.contractCount]);

  // Pulse animation
  useFrame((state) => {
    if (meshRef.current && glowRef.current) {
      const time = state.clock.getElapsedTime();

      // Breathing effect
      const breathe = Math.sin(time * 0.5 + position[0] + position[1]) * 0.05 + 1;
      meshRef.current.scale.setScalar(breathe * (isHovered || isSelected ? 1.3 : 1));

      // Glow pulsing
      const glowPulse = Math.sin(time * 2 + position[0]) * 0.3 + 0.7;
      glowRef.current.scale.setScalar(breathe * 1.5 * (isHovered || isSelected ? 1.5 : 1));

      if (glowRef.current.material instanceof THREE.MeshBasicMaterial) {
        glowRef.current.material.opacity = glowPulse * (isHovered || isSelected ? 0.6 : 0.3);
      }

      // Rotation
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.003;
    }
  });

  return (
    <group position={position}>
      {/* Outer glow */}
      <Sphere ref={glowRef} args={[size, 16, 16]}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.3}
        />
      </Sphere>

      {/* Main neuron sphere */}
      <Sphere
        ref={meshRef}
        args={[size, 32, 32]}
        onPointerOver={(e: ThreeEvent<PointerEvent>) => {
          e.stopPropagation();
          setHovered(true);
          setHoveredProject(project);
          document.body.style.cursor = 'pointer';
        }}
        onPointerOut={() => {
          setHovered(false);
          setHoveredProject(null);
          document.body.style.cursor = 'auto';
        }}
        onClick={(e: ThreeEvent<MouseEvent>) => {
          e.stopPropagation();
          setSelectedProject(isSelected ? null : project);
        }}
      >
        <meshPhysicalMaterial
          color={color}
          emissive={color}
          emissiveIntensity={isHovered || isSelected ? 1.2 : 0.5}
          metalness={0.3}
          roughness={0.2}
          transmission={0.3}
          transparent
          opacity={0.9}
        />
      </Sphere>

      {/* Label on hover */}
      {(isHovered || isSelected) && (
        <Html
          position={[0, size + 0.3, 0]}
          center
          distanceFactor={8}
          style={{
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          <div className="glass-strong organic px-3 py-1.5 text-xs font-medium whitespace-nowrap">
            {project.name}
          </div>
        </Html>
      )}

      {/* Inner core particles effect */}
      {(isHovered || isSelected) && (
        <pointLight
          color={color}
          intensity={2}
          distance={3}
        />
      )}
    </group>
  );
}
