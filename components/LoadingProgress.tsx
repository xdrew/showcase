'use client';

import { useEffect, useState } from 'react';

interface LoadingProgressProps {
  progress: number;
  isComplete: boolean;
}

export function LoadingProgress({ progress, isComplete }: LoadingProgressProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (isComplete) {
      // Fade out after a short delay when complete
      const timer = setTimeout(() => {
        setVisible(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isComplete]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#0a0a0f] flex items-center justify-center transition-opacity duration-500 ${
        isComplete ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="glass-strong organic px-8 py-6 min-w-[400px]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
            <span className="text-lg">Loading Molanship...</span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Progress percentage */}
          <div className="text-center text-sm text-gray-400">
            {Math.round(progress)}%
          </div>
        </div>
      </div>
    </div>
  );
}
