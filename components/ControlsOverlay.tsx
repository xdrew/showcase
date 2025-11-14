'use client';

import { useState, useEffect } from 'react';

export function ControlsOverlay() {
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if device is actually a mobile/tablet (not just touch-capable)
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 1024; // Tablet/mobile breakpoint
      const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      // Show mobile controls only if it's a touch device AND (small screen OR mobile user agent)
      setIsMobile(isTouchDevice && (isSmallScreen || isMobileUA));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Hide controls after 10 seconds
    const timer = setTimeout(() => {
      setVisible(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
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
        {isMobile ? (
          <>
            <div className="flex items-center gap-3">
              <div className="glass px-3 py-1 rounded font-mono text-xs min-w-[80px] text-center bg-cyan-500/20">
                Left Stick
              </div>
              <span className="text-gray-300">Move & rotate</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="glass px-3 py-1 rounded font-mono text-xs min-w-[80px] text-center bg-purple-500/20">
                Right Stick
              </div>
              <span className="text-gray-300">Up / down</span>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-xs text-gray-400">
                Use the on-screen joysticks to control your rocket. Tap planets to view details.
              </p>
            </div>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
}
