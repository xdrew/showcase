'use client';

import { useStore } from '@/lib/store';

export function SearchBar() {
  const searchQuery = useStore((state) => state.searchQuery);
  const setSearchQuery = useStore((state) => state.setSearchQuery);

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-10 w-96">
      <div className="glass-strong organic p-2">
        <div className="flex items-center gap-3 px-3">
          <span className="text-xl">🔍</span>
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-gray-500 py-2"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
