'use client';

import { useRef, useMemo } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { useStore } from '@/lib/store';

interface TrailParticle {
  position: THREE.Vector3;
  rotation: THREE.Euler;
  age: number;
  velocity: THREE.Vector3;
}

export function MonadTrail() {
  const particles = useRef<TrailParticle[]>([]);
  const meshRefs = useRef<THREE.Mesh[]>([]);
  const rocketPosition = useStore((state) => state.rocketPosition);
  const rocketRotation = useStore((state) => state.rocketRotation);
  const spawnTimer = useRef(0);

  const MAX_PARTICLES = 150;
  const SPAWN_INTERVAL = 0.02; // Spawn every 0.02 seconds (more frequent)
  const PARTICLE_LIFETIME = 2; // Fade over 2 seconds
  const PARTICLE_SIZE = 0.3;

  // Load SVG as texture
  const texture = useLoader(THREE.TextureLoader, '/monad.svg');

  // Create material with transparency
  const material = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
  }, [texture]);

  useFrame((state, delta) => {
    spawnTimer.current += delta;

    // Spawn new particle
    if (spawnTimer.current >= SPAWN_INTERVAL) {
      spawnTimer.current = 0;

      const rocketPos = new THREE.Vector3(...rocketPosition);
      const rocketRot = new THREE.Euler(...rocketRotation);

      // Spawn behind the rocket (closer to the rocket body)
      const spawnOffset = new THREE.Vector3(0, 0, -1);
      spawnOffset.applyEuler(rocketRot);
      const spawnPos = rocketPos.clone().add(spawnOffset);

      // Add slight random velocity
      const randomVelocity = new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      );

      particles.current.push({
        position: spawnPos,
        rotation: rocketRot.clone(),
        age: 0,
        velocity: randomVelocity,
      });

      // Remove old particles
      if (particles.current.length > MAX_PARTICLES) {
        particles.current.shift();
      }
    }

    // Update existing particles
    particles.current.forEach((particle, index) => {
      particle.age += delta;
      particle.position.add(particle.velocity);
      particle.rotation.z += delta * 2; // Rotate the monad symbol

      // Update mesh
      const mesh = meshRefs.current[index];
      if (mesh) {
        mesh.position.copy(particle.position);
        mesh.rotation.copy(particle.rotation);

        // Fade out based on age
        const lifeRatio = particle.age / PARTICLE_LIFETIME;
        const opacity = Math.max(0, 1 - lifeRatio);
        mesh.material.opacity = opacity;

        // Scale up as it ages (grows from 1x to 2.5x)
        const scale = 1 + lifeRatio * 1.5;
        mesh.scale.set(scale, scale, scale);

        mesh.visible = opacity > 0;
      }
    });

    // Remove dead particles
    particles.current = particles.current.filter(p => p.age < PARTICLE_LIFETIME);
  });

  return (
    <group>
      {Array.from({ length: MAX_PARTICLES }).map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            if (el) meshRefs.current[i] = el;
          }}
          visible={false}
        >
          <planeGeometry args={[PARTICLE_SIZE, PARTICLE_SIZE]} />
          <primitive object={material.clone()} attach="material" />
        </mesh>
      ))}
    </group>
  );
}
