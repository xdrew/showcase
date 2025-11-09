'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function BlackHole() {
  const blackHoleRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Create particle system with initial state
  const particleCount = 200;

  const particleData = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const initialAngles = new Float32Array(particleCount);
    const initialRadii = new Float32Array(particleCount);
    const angularVelocities = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 3 + Math.random() * 8;
      const height = (Math.random() - 0.5) * 0.5;

      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = height;
      positions[i * 3 + 2] = Math.sin(angle) * radius;

      // Store initial state for animation
      initialAngles[i] = angle;
      initialRadii[i] = radius;
      angularVelocities[i] = 0.3 + Math.random() * 0.4; // Varying orbital speeds

      // Purple to orange gradient based on radius
      const t = radius / 11;
      colors[i * 3] = THREE.MathUtils.lerp(0.6, 1.0, t); // R
      colors[i * 3 + 1] = THREE.MathUtils.lerp(0.2, 0.4, t); // G
      colors[i * 3 + 2] = THREE.MathUtils.lerp(0.8, 0.0, t); // B
    }

    return { positions, colors, initialAngles, initialRadii, angularVelocities };
  }, []);

  useFrame(({ clock }) => {
    if (!blackHoleRef.current || !particlesRef.current) return;

    const time = clock.getElapsedTime();

    // Rotate the entire black hole group slowly
    blackHoleRef.current.rotation.y = time * 0.05;

    // Animate particles spiraling inward
    const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
    const colors = particlesRef.current.geometry.attributes.color.array as Float32Array;

    for (let i = 0; i < particleCount; i++) {
      // Calculate spiral motion
      const age = (time * 0.3 + i * 0.01) % 10; // Each particle has a lifecycle
      const radius = particleData.initialRadii[i] * (1 - age / 10); // Spiral inward
      const angle = particleData.initialAngles[i] + time * particleData.angularVelocities[i];

      // Reset particle when it reaches the center
      if (radius < 0.5) {
        const resetRadius = 3 + Math.random() * 8;
        particleData.initialRadii[i] = resetRadius;
        particleData.initialAngles[i] = Math.random() * Math.PI * 2;

        // Update color for new radius
        const t = resetRadius / 11;
        colors[i * 3] = THREE.MathUtils.lerp(0.6, 1.0, t);
        colors[i * 3 + 1] = THREE.MathUtils.lerp(0.2, 0.4, t);
        colors[i * 3 + 2] = THREE.MathUtils.lerp(0.8, 0.0, t);
      }

      // Update position
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 0.5 * (radius / 11); // Height decreases as it spirals in
      positions[i * 3 + 2] = Math.sin(angle) * radius;
    }

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
    particlesRef.current.geometry.attributes.color.needsUpdate = true;

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
        <sphereGeometry args={[2, 12, 12]} />
        <meshBasicMaterial
          color="#000000"
        />
      </mesh>

      {/* Gravitational lensing ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.5, 0.3, 6, 16]} />
        <meshBasicMaterial
          color="#9370db"
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Particle system - spiraling into black hole */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={particleData.positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={particleCount}
            array={particleData.colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.15}
          vertexColors
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
          sizeAttenuation={false}
        />
      </points>

      {/* Central point light for illumination */}
      <pointLight color="#9370db" intensity={3} distance={50} />
    </group>
  );
}
