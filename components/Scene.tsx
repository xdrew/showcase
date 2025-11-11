'use client';

import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, PerformanceMonitor } from '@react-three/drei';
import { Rocket } from './Rocket';
import { BlackHole } from './BlackHole';
import { StarSystem } from './StarSystem';
import { CameraRig } from './CameraRig';
import { RainbowTrailWrapper } from './RainbowTrailWrapper';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { categories } from '@/data/projects';
import { useStore } from '@/lib/store';
import { LoadingProgress } from './LoadingProgress';

export function Scene() {
  const [mounted, setMounted] = useState(false);
  const [dpr, setDpr] = useState(1.5);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const [showUniverse, setShowUniverse] = useState(false);
  const tourStarted = useStore((state) => state.tourStarted);

  useEffect(() => {
    setMounted(true);

    // Simulate loading progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        setLoadingProgress(100);
        setTimeout(() => setIsLoadingComplete(true), 300);
        clearInterval(interval);
      } else {
        setLoadingProgress(progress);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  // Delay showing universe elements until camera transition completes
  useEffect(() => {
    if (tourStarted) {
      const timer = setTimeout(() => {
        setShowUniverse(true);
      }, 1500); // Show universe 1.5 seconds after tour starts (during camera transition)
      return () => clearTimeout(timer);
    }
  }, [tourStarted]);

  return (
    <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
      {/* Loading progress overlay */}
      <LoadingProgress progress={loadingProgress} isComplete={isLoadingComplete} />

      <Canvas
        camera={{
          position: [0, 10, 60],
          fov: 75,
        }}
        dpr={dpr}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ width: '100%', height: '100%' }}
      >
      {/* Performance monitoring */}
      <PerformanceMonitor
        onIncline={() => setDpr(2)}
        onDecline={() => setDpr(1)}
      />
      {/* Deep space background */}
      <color attach="background" args={['#000005']} />
      <fog attach="fog" args={['#000005', 50, 200]} />

      {/* Starfield background - highly optimized */}
      <Stars
        radius={300}
        depth={100}
        count={1500}
        factor={5}
        saturation={0}
        fade
        speed={0.2}
      />

      {/* Ambient lighting */}
      <ambientLight intensity={0.5} />

      {/* Directional light for better visibility */}
      <directionalLight position={[10, 10, 5]} intensity={0.5} />

      {/* Suspense wrapper for 3D content */}
      <Suspense fallback={null}>
        {/* Player-controlled rocket */}
        <Rocket />

        {/* Only show universe elements after camera transition */}
        {showUniverse && (
          <>
            {/* Central black hole (Monad) */}
            <BlackHole />

            {/* Star systems arranged in a circle around the black hole */}
            {categories.map((category, index) => {
              const angle = (index / categories.length) * Math.PI * 2;
              const radius = 40; // Distance from black hole
              const height = Math.sin(index * 0.7) * 5; // Varied heights
              const position: [number, number, number] = [
                Math.cos(angle) * radius,
                height,
                Math.sin(angle) * radius,
              ];

              return (
                <StarSystem
                  key={category.id}
                  categoryId={category.id}
                  categoryName={category.name}
                  color={category.color}
                  position={position}
                />
              );
            })}
          </>
        )}
      </Suspense>

      {/* Camera follows the rocket */}
      <CameraRig />

      {/* Post-processing effects - optimized */}
      <EffectComposer>
        <Bloom
          intensity={1.2}
          luminanceThreshold={0.5}
          luminanceSmoothing={0.8}
          mipmapBlur
        />
      </EffectComposer>
    </Canvas>
    </div>
  );
}
