'use client';

import { useStore } from '@/lib/store';

export function IntroOverlay() {
  const tourStarted = useStore((state) => state.tourStarted);
  const setTourStarted = useStore((state) => state.setTourStarted);

  if (tourStarted) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center md:justify-end p-4 md:pr-8">
        <div className="max-w-md pointer-events-auto my-8">
          <div className="glass-strong organic p-8 space-y-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Molanship
          </h1>

          <div className="space-y-4 text-gray-300">
            <p>
              Welcome aboard the Molanship - your vessel for exploring the Monad Ecosystem. Navigate through an interactive 3D universe of projects and applications at the speed of 10,000 TPS.
            </p>

            <p>
              Fly through star systems representing different categories. Each planet represents a unique project you can discover and explore.
            </p>

            <div className="space-y-2 text-sm">
              <p className="text-cyan-400 font-semibold">Controls:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-400">
                <li>W/S - Move forward/backward</li>
                <li>A/D - Turn left/right</li>
                <li>Q/E - Move up/down</li>
                <li>Mouse wheel - Zoom in/out</li>
                <li>Click planets for details</li>
              </ul>
            </div>
          </div>

            <button
              onClick={() => setTourStarted(true)}
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
            >
              Begin Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
