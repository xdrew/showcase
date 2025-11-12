'use client';

import { useStore } from '@/lib/store';

export function SoundToggle() {
  const soundEnabled = useStore((state) => state.soundEnabled);
  const setSoundEnabled = useStore((state) => state.setSoundEnabled);
  const tourStarted = useStore((state) => state.tourStarted);

  if (!tourStarted) return null;

  return (
    <button
      onClick={() => setSoundEnabled(!soundEnabled)}
      className="fixed bottom-8 right-8 z-50 backdrop-blur-md bg-black/40 border border-purple-500/20 rounded-lg p-3 shadow-2xl shadow-purple-500/10 hover:bg-black/60 transition-all"
      aria-label={soundEnabled ? 'Mute sounds' : 'Unmute sounds'}
    >
      {soundEnabled ? (
        <svg
          className="w-6 h-6 text-purple-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          />
        </svg>
      ) : (
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
          />
        </svg>
      )}
    </button>
  );
}
