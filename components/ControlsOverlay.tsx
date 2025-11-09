'use client';

import { useState, useEffect } from 'react';

export function ControlsOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide controls after 10 seconds
    const timer = setTimeout(() => {
      setVisible(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-8 left-8 glass-strong organic p-6 max-w-md z-50 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-cyan-400">Rocket Controls</h3>
        <button
          onClick={() => setVisible(false)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          ✕
        </button>
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-3">
          <div className="glass px-3 py-1 rounded font-mono text-xs min-w-[60px] text-center">
            W
          </div>
          <span className="text-gray-300">Forward thrust</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="glass px-3 py-1 rounded font-mono text-xs min-w-[60px] text-center">
            S
          </div>
          <span className="text-gray-300">Reverse thrust</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="glass px-3 py-1 rounded font-mono text-xs min-w-[60px] text-center">
            A / D
          </div>
          <span className="text-gray-300">Rotate left / right</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="glass px-3 py-1 rounded font-mono text-xs min-w-[60px] text-center">
            Q / E
          </div>
          <span className="text-gray-300">Move up / down</span>
        </div>

        <div className="flex items-center gap-3">
          <div className="glass px-3 py-1 rounded font-mono text-xs min-w-[60px] text-center">
            Scroll
          </div>
          <span className="text-gray-300">Zoom in / out</span>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-700">
          <p className="text-xs text-gray-400">
            Fly close to planets to view project details. Click on planets to open their information panel.
          </p>
        </div>
      </div>
    </div>
  );
}
