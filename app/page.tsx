'use client';

import dynamic from 'next/dynamic';
import { Sidebar } from '@/components/Sidebar';
import { ProjectPanel } from '@/components/ProjectPanel';
import { SearchBar } from '@/components/SearchBar';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { IntroOverlay } from '@/components/IntroOverlay';
import { Minimap } from '@/components/Minimap';
import { SoundToggle } from '@/components/SoundToggle';
import { MobileControls } from '@/components/MobileControls';

// Dynamically import Scene to avoid SSR issues with Three.js
const Scene = dynamic(
  () => import('@/components/Scene').then(mod => ({ default: mod.Scene })),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-screen flex items-center justify-center bg-[#0a0a0f]">
        <div className="glass-strong organic px-8 py-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-lg">Loading Space Explorer...</span>
          </div>
        </div>
      </div>
    ),
  }
);

export default function Home() {
  return (
    <main className="w-full h-screen overflow-hidden relative">
      {/* 3D Scene */}
      <ErrorBoundary>
        <Scene />
      </ErrorBoundary>

      {/* Intro Overlay */}
      <IntroOverlay />

      {/* UI Overlay */}
      <ProjectPanel />
      <Minimap />
      <SoundToggle />
      <MobileControls />

      {/* Background gradient overlay */}
      <div className="pointer-events-none fixed inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
    </main>
  );
}
