'use client';

import { useRef, useState, useMemo } from 'react';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import { Sphere, Html, Decal, useTexture } from '@react-three/drei';
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
  const outerGlowRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const setSelectedProject = useStore((state) => state.setSelectedProject);
  const setHoveredProject = useStore((state) => state.setHoveredProject);
  const selectedProject = useStore((state) => state.selectedProject);
  const hoveredProject = useStore((state) => state.hoveredProject);

  const isSelected = selectedProject?.id === project.id;
  const isHovered = hoveredProject?.id === project.id;

  // Calculate size based on contract count
  const size = useMemo(() => {
    const baseSize = 0.3;
    const scale = project.contractCount ? Math.log(project.contractCount + 1) * 0.15 : 0;
    return Math.min(baseSize + scale, 0.8);
  }, [project.contractCount]);

  // Pulse animation
  useFrame((state) => {
    if (meshRef.current && glowRef.current && outerGlowRef.current) {
      const time = state.clock.getElapsedTime();

      // Breathing effect
      const breathe = Math.sin(time * 0.5 + position[0] + position[1]) * 0.08 + 1;
      meshRef.current.scale.setScalar(breathe * (isHovered || isSelected ? 1.4 : 1));

      // Inner glow pulsing
      const glowPulse = Math.sin(time * 2 + position[0]) * 0.3 + 0.7;
      glowRef.current.scale.setScalar(breathe * 1.2 * (isHovered || isSelected ? 1.6 : 1));

      if (glowRef.current.material instanceof THREE.MeshBasicMaterial) {
        glowRef.current.material.opacity = glowPulse * (isHovered || isSelected ? 0.5 : 0.25);
      }

      // Outer glow
      outerGlowRef.current.scale.setScalar(breathe * 1.8 * (isHovered || isSelected ? 2 : 1));
      if (outerGlowRef.current.material instanceof THREE.MeshBasicMaterial) {
        outerGlowRef.current.material.opacity = glowPulse * (isHovered || isSelected ? 0.3 : 0.12);
      }

      // Slower rotation
      meshRef.current.rotation.y += 0.003;
      meshRef.current.rotation.x += 0.002;
    }
  });

  return (
    <group position={position}>
      {/* Outer glow layer */}
      <Sphere ref={outerGlowRef} args={[size * 1.8, 32, 32]}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      {/* Inner glow */}
      <Sphere ref={glowRef} args={[size * 1.2, 32, 32]}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      {/* Main neuron sphere with enhanced materials */}
      <Sphere
        ref={meshRef}
        args={[size, 64, 64]}
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
          emissiveIntensity={isHovered || isSelected ? 2.0 : 1.2}
          metalness={0.6}
          roughness={0.15}
          transmission={0.15}
          thickness={0.5}
          transparent
          opacity={0.92}
          clearcoat={1}
          clearcoatRoughness={0.05}
          envMapIntensity={1.5}
        />
      </Sphere>

      {/* Logo display - rendered as HTML overlay */}
      {project.logo && (
        <Html
          position={[0, 0, size * 1.1]}
          center
          distanceFactor={10}
          zIndexRange={[100, 0]}
          style={{
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: `3px solid ${color}`,
              boxShadow: `0 0 20px ${color}, 0 0 40px ${color}40`,
              backgroundColor: '#0a0a0a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
            }}
          >
            <img
              src={project.logo}
              alt={project.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </Html>
      )}

      {/* Enhanced label on hover with project info */}
      {(isHovered || isSelected) && (
        <Html
          position={[0, size + 0.8, 0]}
          center
          distanceFactor={8}
          style={{
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          <div
            className="glass-strong organic px-5 py-3 text-sm font-semibold shadow-2xl max-w-sm"
            style={{
              borderLeft: `4px solid ${color}`,
              boxShadow: `0 0 30px ${color}40, 0 10px 40px rgba(0,0,0,0.5)`,
            }}
          >
            <div className="text-white font-bold text-base">{project.name}</div>
            {project.subcategory && (
              <div
                className="text-xs mt-1 font-medium"
                style={{ color: color }}
              >
                {project.subcategory}
              </div>
            )}
            {project.description && (
              <div className="text-xs text-gray-300 mt-2 font-normal leading-relaxed">
                {project.description.slice(0, 120)}
                {project.description.length > 120 && '...'}
              </div>
            )}
            {project.contractCount && (
              <div className="text-xs text-gray-400 mt-2">
                {project.contractCount} contract{project.contractCount > 1 ? 's' : ''}
              </div>
            )}
          </div>
        </Html>
      )}

      {/* Enhanced point light for selected/hovered state */}
      {(isHovered || isSelected) && (
        <>
          <pointLight
            color={color}
            intensity={3}
            distance={5}
          />
          {/* Add rim light effect */}
          <pointLight
            position={[size * 2, 0, 0]}
            color={color}
            intensity={1.5}
            distance={3}
          />
        </>
      )}
    </group>
  );
}
