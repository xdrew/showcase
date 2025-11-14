'use client';

import { useEffect, useRef, useState } from 'react';
import { useStore } from '@/lib/store';

export function MobileControls() {
  const [isMobile, setIsMobile] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const setTouchControls = useStore((state) => state.setTouchControls);

  const leftJoystickRef = useRef<HTMLDivElement>(null);
  const rightJoystickRef = useRef<HTMLDivElement>(null);
  const leftStickRef = useRef<HTMLDivElement>(null);
  const rightStickRef = useRef<HTMLDivElement>(null);

  const leftTouch = useRef<{ id: number; startX: number; startY: number } | null>(null);
  const rightTouch = useRef<{ id: number; startX: number; startY: number } | null>(null);

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
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile || !showControls) return;

    const handleTouchStart = (e: TouchEvent) => {
      Array.from(e.changedTouches).forEach((touch) => {
        const rect = (touch.target as HTMLElement).getBoundingClientRect();
        const isLeft = leftJoystickRef.current?.contains(touch.target as Node);
        const isRight = rightJoystickRef.current?.contains(touch.target as Node);

        if (isLeft && !leftTouch.current) {
          leftTouch.current = {
            id: touch.identifier,
            startX: touch.clientX - rect.left,
            startY: touch.clientY - rect.top,
          };
        } else if (isRight && !rightTouch.current) {
          rightTouch.current = {
            id: touch.identifier,
            startX: touch.clientX - rect.left,
            startY: touch.clientY - rect.top,
          };
        }
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();

      Array.from(e.changedTouches).forEach((touch) => {
        if (leftTouch.current && touch.identifier === leftTouch.current.id) {
          const rect = leftJoystickRef.current?.getBoundingClientRect();
          if (!rect) return;

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const maxRadius = rect.width / 2 - 20;

          let dx = touch.clientX - rect.left - centerX;
          let dy = touch.clientY - rect.top - centerY;

          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance > maxRadius) {
            dx = (dx / distance) * maxRadius;
            dy = (dy / distance) * maxRadius;
          }

          if (leftStickRef.current) {
            leftStickRef.current.style.transform = `translate(${dx}px, ${dy}px)`;
          }

          // Left joystick: thrust (Y) and rotation (X)
          const thrust = -dy / maxRadius;
          const rotation = dx / maxRadius;

          setTouchControls({
            thrust,
            rotation,
            vertical: 0,
          });
        }

        if (rightTouch.current && touch.identifier === rightTouch.current.id) {
          const rect = rightJoystickRef.current?.getBoundingClientRect();
          if (!rect) return;

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const maxRadius = rect.width / 2 - 20;

          let dx = touch.clientX - rect.left - centerX;
          let dy = touch.clientY - rect.top - centerY;

          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance > maxRadius) {
            dx = (dx / distance) * maxRadius;
            dy = (dy / distance) * maxRadius;
          }

          if (rightStickRef.current) {
            rightStickRef.current.style.transform = `translate(${dx}px, ${dy}px)`;
          }

          // Right joystick: vertical movement
          const vertical = -dy / maxRadius;

          // Get current touch controls from store
          const currentControls = useStore.getState().touchControls;
          setTouchControls({
            ...currentControls,
            vertical,
          });
        }
      });
    };

    const handleTouchEnd = (e: TouchEvent) => {
      Array.from(e.changedTouches).forEach((touch) => {
        if (leftTouch.current && touch.identifier === leftTouch.current.id) {
          leftTouch.current = null;
          if (leftStickRef.current) {
            leftStickRef.current.style.transform = 'translate(0, 0)';
          }
          setTouchControls({
            thrust: 0,
            rotation: 0,
            vertical: 0,
          });
        }

        if (rightTouch.current && touch.identifier === rightTouch.current.id) {
          rightTouch.current = null;
          if (rightStickRef.current) {
            rightStickRef.current.style.transform = 'translate(0, 0)';
          }
          const currentControls = useStore.getState().touchControls;
          setTouchControls({
            ...currentControls,
            vertical: 0,
          });
        }
      });
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd, { passive: false });
    document.addEventListener('touchcancel', handleTouchEnd, { passive: false });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, [isMobile, showControls, setTouchControls]);

  if (!isMobile) return null;

  return (
    <>
      {/* Toggle Button - Game Controller Icon */}
      <button
        onClick={() => setShowControls(!showControls)}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[60] pointer-events-auto glass-strong organic px-4 py-2 rounded-full hover:bg-cyan-500/20 transition-all shadow-lg"
        aria-label="Toggle mobile controls"
      >
        <div className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-xs text-cyan-300 font-medium">
            {showControls ? 'Hide Controls' : 'Show Controls'}
          </span>
        </div>
      </button>

      {/* Joysticks - Only shown when showControls is true */}
      {showControls && (
        <div className="fixed inset-0 pointer-events-none z-40">
          {/* Left Joystick - Thrust and Rotation */}
          <div
            ref={leftJoystickRef}
            className="absolute bottom-16 left-4 w-24 h-24 sm:w-28 sm:h-28 pointer-events-auto select-none"
            style={{ touchAction: 'none' }}
          >
            <div className="relative w-full h-full rounded-full bg-gray-900/40 border-2 border-cyan-500/30 backdrop-blur-sm">
              <div
                ref={leftStickRef}
                className="absolute top-1/2 left-1/2 w-10 h-10 -ml-5 -mt-5 rounded-full bg-cyan-500/60 border-2 border-cyan-400 transition-transform"
                style={{ transform: 'translate(0, 0)' }}
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-[10px] text-cyan-300/60 font-bold select-none">MOVE</div>
              </div>
            </div>
          </div>

          {/* Right Joystick - Vertical Movement */}
          <div
            ref={rightJoystickRef}
            className="absolute bottom-16 right-4 w-24 h-24 sm:w-28 sm:h-28 pointer-events-auto select-none"
            style={{ touchAction: 'none' }}
          >
            <div className="relative w-full h-full rounded-full bg-gray-900/40 border-2 border-purple-500/30 backdrop-blur-sm">
              <div
                ref={rightStickRef}
                className="absolute top-1/2 left-1/2 w-10 h-10 -ml-5 -mt-5 rounded-full bg-purple-500/60 border-2 border-purple-400 transition-transform"
                style={{ transform: 'translate(0, 0)' }}
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-[10px] text-purple-300/60 font-bold select-none">UP/DN</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
