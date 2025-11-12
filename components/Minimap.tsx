'use client';

import { useEffect, useRef } from 'react';
import { useStore } from '@/lib/store';
import { categories } from '@/data/projects';

export function Minimap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rocketImageRef = useRef<HTMLImageElement | null>(null);
  const animationFrameRef = useRef<number>();
  const rocketPosition = useStore((state) => state.rocketPosition);
  const tourStarted = useStore((state) => state.tourStarted);

  // Load rocket image
  useEffect(() => {
    const img = new Image();
    img.src = '/molandak.png';
    img.onload = () => {
      rocketImageRef.current = img;
    };
  }, []);

  useEffect(() => {
    if (!tourStarted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(0, 0, 5, 0.9)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Minimap settings
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const scale = 2; // Scale factor for world to minimap

      // Draw black hole at center
      ctx.beginPath();
      ctx.arc(centerX, centerY, 8, 0, Math.PI * 2);
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 8);
      gradient.addColorStop(0, '#9370db');
      gradient.addColorStop(1, '#4a2070');
      ctx.fillStyle = gradient;
      ctx.fill();

      // Add glow around black hole
      ctx.beginPath();
      ctx.arc(centerX, centerY, 12, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(147, 112, 219, 0.3)';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw star systems
      categories.forEach((category, index) => {
        const angle = (index / categories.length) * Math.PI * 2;
        const radius = 40; // Same as in Scene
        const height = Math.sin(index * 0.7) * 5;

        // Convert 3D position to 2D minimap (top-down view, ignore Y)
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        const mapX = centerX + x * scale;
        const mapY = centerY + z * scale;

        // Draw star system
        ctx.beginPath();
        ctx.arc(mapX, mapY, 4, 0, Math.PI * 2);
        ctx.fillStyle = category.color;
        ctx.fill();

        // Add glow
        ctx.beginPath();
        ctx.arc(mapX, mapY, 6, 0, Math.PI * 2);
        ctx.strokeStyle = category.color + '40';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw label
        ctx.fillStyle = category.color;
        ctx.font = '8px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(category.name.toUpperCase().slice(0, 3), mapX, mapY + 14);
      });

      // Draw rocket position
      const rocketX = centerX + rocketPosition[0] * scale;
      const rocketY = centerY + rocketPosition[2] * scale; // Use Z for Y in top-down view

      // Draw rocket trail
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(rocketX, rocketY);
      ctx.strokeStyle = 'rgba(147, 112, 219, 0.2)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw rocket glow
      ctx.beginPath();
      ctx.arc(rocketX, rocketY, 12, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(147, 112, 219, 0.4)';
      ctx.lineWidth = 3;
      ctx.stroke();

      // Draw rocket image if loaded
      if (rocketImageRef.current) {
        const size = 20;
        ctx.drawImage(
          rocketImageRef.current,
          rocketX - size / 2,
          rocketY - size / 2,
          size,
          size
        );
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [rocketPosition, tourStarted]);

  if (!tourStarted) return null;

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <div className="glass-strong organic p-4">
        <div className="text-xs text-gray-400 mb-2 font-semibold tracking-wider">
          NAVIGATION
        </div>
        <canvas
          ref={canvasRef}
          width={200}
          height={200}
          className="rounded-lg"
        />
        <div className="mt-2 text-xs text-gray-500 flex items-center justify-between">
          <span>⚪ Stars</span>
          <span className="text-purple-400">🚀 Molanship</span>
        </div>
      </div>
    </div>
  );
}
