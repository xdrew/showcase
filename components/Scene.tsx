'use client';

import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Environment } from '@react-three/drei';
import { NeuralNetwork } from './NeuralNetwork';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

export function Scene() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#0a0a0f]">
        <div className="glass-strong organic px-8 py-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-lg">Initializing 3D Engine...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
      <Canvas
        camera={{
          position: [0, 5, 20],
          fov: 60,
        }}
        gl={{
          antialias: true,
          alpha: true,
        }}
        style={{ width: '100%', height: '100%' }}
      >
      {/* Background */}
      {/* @ts-expect-error - React Three Fiber intrinsic elements */}
      <color attach="background" args={['#0a0a0f']} />
      {/* @ts-expect-error - React Three Fiber intrinsic elements */}
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
    </div>
  );
}
