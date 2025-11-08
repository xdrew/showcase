'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Environment } from '@react-three/drei';
import { NeuralNetwork } from './NeuralNetwork';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export function Scene() {
  return (
    <Canvas
      camera={{
        position: [0, 5, 20],
        fov: 60,
      }}
      gl={{
        antialias: true,
        alpha: true,
      }}
    >
      {/* Background */}
      <color attach="background" args={['#0a0a0f']} />
      <fog attach="fog" args={['#0a0a0f', 10, 50]} />

      {/* Starfield background */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />

      {/* Environment lighting */}
      <Environment preset="night" />

      {/* Neural network */}
      <Suspense fallback={null}>
        <NeuralNetwork />
      </Suspense>

      {/* Camera controls */}
      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        minDistance={5}
        maxDistance={40}
        maxPolarAngle={Math.PI / 1.5}
        autoRotate
        autoRotateSpeed={0.3}
      />

      {/* Post-processing effects */}
      <EffectComposer>
        <Bloom
          intensity={1.5}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>
    </Canvas>
  );
}
