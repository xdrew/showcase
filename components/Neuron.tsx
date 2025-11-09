'use client';

import { useRef, useState, useMemo } from 'react';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import { Sphere, Html, Billboard } from '@react-three/drei';
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
    const baseSize = 0.2;
    const scale = project.contractCount ? Math.log(project.contractCount + 1) * 0.1 : 0;
    return Math.min(baseSize + scale, 0.6); // Cap maximum size
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
      <Sphere ref={glowRef} args={[size * 1.4, 24, 24]}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.15}
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
          emissiveIntensity={isHovered || isSelected ? 1.5 : 0.8}
          metalness={0.4}
          roughness={0.1}
          transmission={0.2}
          transparent
          opacity={0.95}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </Sphere>

      {/* Logo - always visible in front of neuron */}
      {project.logo && (
        <Billboard position={[0, 0, size * 0.3]}>
          <Html
            center
            distanceFactor={8}
            style={{
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          >
            <img
              src={project.logo}
              alt={project.name}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: `2px solid ${color}`,
                boxShadow: `0 0 15px ${color}`,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
              }}
              onError={(e) => {
                // Hide image if it fails to load
                e.currentTarget.style.display = 'none';
              }}
            />
          </Html>
        </Billboard>
      )}

      {/* Label on hover */}
      {(isHovered || isSelected) && (
        <Html
          position={[0, size + 0.5, 0]}
          center
          distanceFactor={6}
          style={{
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          <div className="glass-strong organic px-4 py-2 text-sm font-semibold shadow-lg max-w-xs">
            <div className="text-white">{project.name}</div>
            {project.subcategory && (
              <div className="text-xs text-gray-400 mt-0.5">{project.subcategory}</div>
            )}
            {project.description && (
              <div className="text-xs text-gray-300 mt-1 font-normal max-w-[200px]">
                {project.description.slice(0, 100)}
                {project.description.length > 100 && '...'}
              </div>
            )}
          </div>
        </Html>
      )}

      {/* Inner core particles effect */}
      {(isHovered || isSelected) && (
        <>
          <pointLight
            color={color}
            intensity={2}
            distance={3}
          />
        </>
      )}
    </group>
  );
}
