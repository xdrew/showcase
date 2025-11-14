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
      {/* Toggle Button */}
      <button
        onClick={() => setShowControls(!showControls)}
        className="fixed top-20 right-4 z-50 pointer-events-auto glass-strong organic p-3 rounded-full hover:bg-cyan-500/20 transition-all"
        aria-label="Toggle mobile controls"
      >
        <svg
          className="w-6 h-6 text-cyan-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {showControls ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            />
          )}
        </svg>
      </button>

      {/* Joysticks - Only shown when showControls is true */}
      {showControls && (
        <div className="fixed inset-0 pointer-events-none z-40">
          {/* Left Joystick - Thrust and Rotation */}
          <div
            ref={leftJoystickRef}
            className="absolute bottom-8 left-8 w-32 h-32 pointer-events-auto"
            style={{ touchAction: 'none' }}
          >
            <div className="relative w-full h-full rounded-full bg-gray-900/40 border-2 border-cyan-500/30 backdrop-blur-sm">
              <div
                ref={leftStickRef}
                className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 rounded-full bg-cyan-500/60 border-2 border-cyan-400 transition-transform"
                style={{ transform: 'translate(0, 0)' }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-xs text-cyan-300/60 font-bold">MOVE</div>
              </div>
            </div>
          </div>

          {/* Right Joystick - Vertical Movement */}
          <div
            ref={rightJoystickRef}
            className="absolute bottom-8 right-8 w-32 h-32 pointer-events-auto"
            style={{ touchAction: 'none' }}
          >
            <div className="relative w-full h-full rounded-full bg-gray-900/40 border-2 border-purple-500/30 backdrop-blur-sm">
              <div
                ref={rightStickRef}
                className="absolute top-1/2 left-1/2 w-12 h-12 -ml-6 -mt-6 rounded-full bg-purple-500/60 border-2 border-purple-400 transition-transform"
                style={{ transform: 'translate(0, 0)' }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-xs text-purple-300/60 font-bold">UP/DN</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
