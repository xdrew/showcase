'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function BlackHole() {
  const blackHoleRef = useRef<THREE.Group>(null);
  const accretionDiskRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Create particle system for accretion disk (reduced for performance)
  const particleCount = 500;
  const particles = new Float32Array(particleCount * 3);
  const particleColors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 3 + Math.random() * 8;
    const height = (Math.random() - 0.5) * 0.5;

    particles[i * 3] = Math.cos(angle) * radius;
    particles[i * 3 + 1] = height;
    particles[i * 3 + 2] = Math.sin(angle) * radius;

    // Purple to orange gradient
    const t = radius / 11;
    particleColors[i * 3] = THREE.MathUtils.lerp(0.6, 1.0, t); // R
    particleColors[i * 3 + 1] = THREE.MathUtils.lerp(0.2, 0.4, t); // G
    particleColors[i * 3 + 2] = THREE.MathUtils.lerp(0.8, 0.0, t); // B
  }

  useFrame(({ clock }) => {
    if (!blackHoleRef.current || !accretionDiskRef.current || !particlesRef.current) return;

    const time = clock.getElapsedTime();

    // Rotate the entire black hole group slowly
    blackHoleRef.current.rotation.y = time * 0.05;

    // Rotate accretion disk
    accretionDiskRef.current.rotation.z = time * 0.3;

    // Rotate particles
    particlesRef.current.rotation.y = time * 0.2;

    // Pulse the black hole sphere
    const scale = 1 + Math.sin(time * 2) * 0.05;
    if (blackHoleRef.current.children[0]) {
      (blackHoleRef.current.children[0] as THREE.Mesh).scale.setScalar(scale);
    }
  });

  return (
    <group ref={blackHoleRef} position={[0, 0, 0]}>
      {/* Central black sphere - the event horizon */}
      <mesh>
        <sphereGeometry args={[2, 16, 16]} />
        <meshStandardMaterial
          color="#000000"
          emissive="#1a0033"
          emissiveIntensity={0.5}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* Gravitational lensing ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.3, 8, 32]} />
        <meshStandardMaterial
          color="#9370db"
          emissive="#9370db"
          emissiveIntensity={1}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Accretion disk */}
      <mesh ref={accretionDiskRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[3, 10, 32]} />
        <meshStandardMaterial
          color="#ff6600"
          emissive="#ff6600"
          emissiveIntensity={0.8}
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Particle system for dynamic accretion disk */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={particles}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particleCount}
            array={particleColors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          vertexColors
          transparent
          opacity={0.8}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>

      {/* Central point light for illumination */}
      <pointLight color="#9370db" intensity={3} distance={50} />
    </group>
  );
}
