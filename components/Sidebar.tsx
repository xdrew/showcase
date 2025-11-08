'use client';

import { categories, projects } from '@/data/projects';
import { useStore } from '@/lib/store';

export function Sidebar() {
  const selectedCategory = useStore((state) => state.selectedCategory);
  const setSelectedCategory = useStore((state) => state.setSelectedCategory);

  const getCategoryCount = (categoryId: string) => {
    return projects.filter(p => p.category === categoryId).length;
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-72 p-6 flex flex-col gap-4 z-10">
      {/* Header */}
      <div className="glass-strong organic p-6">
        <h1 className="text-2xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Monad Ecosystem
        </h1>
        <p className="text-sm text-gray-400">
          Neural Network Explorer
        </p>
      </div>

      {/* Stats */}
      <div className="glass organic p-4">
        <div className="text-sm text-gray-400 mb-1">Total Projects</div>
        <div className="text-3xl font-bold text-cyan-400">{projects.length}</div>
      </div>

      {/* Category filters */}
      <div className="glass-strong organic p-4 flex-1 overflow-y-auto">
        <h2 className="text-sm font-semibold mb-3 text-gray-300 uppercase tracking-wider">
          Categories
        </h2>

        <div className="space-y-2">
          {/* All categories option */}
          <button
            onClick={() => setSelectedCategory(null)}
            className={`w-full text-left px-4 py-3 rounded-2xl transition-all ${
              selectedCategory === null
                ? 'glass-strong glow'
                : 'glass hover:glass-strong'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #00d4ff, #9370db)',
                    boxShadow: selectedCategory === null ? '0 0 10px rgba(0, 212, 255, 0.5)' : 'none'
                  }}
                />
                <span className="font-medium">All</span>
              </div>
              <span className="text-xs text-gray-400">{projects.length}</span>
            </div>
          </button>

          {/* Individual categories */}
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(
                selectedCategory === category.id ? null : category.id
              )}
              className={`w-full text-left px-4 py-3 rounded-2xl transition-all ${
                selectedCategory === category.id
                  ? 'glass-strong'
                  : 'glass hover:glass-strong'
              }`}
              style={{
                boxShadow: selectedCategory === category.id
                  ? `0 0 20px ${category.color}40`
                  : 'none'
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full animate-pulse-glow"
                    style={{
                      backgroundColor: category.color,
                      boxShadow: `0 0 10px ${category.color}`,
                    }}
                  />
                  <span className="font-medium">{category.name}</span>
                </div>
                <span className="text-xs text-gray-400">
                  {getCategoryCount(category.id)}
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1 ml-6">
                {category.description}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Footer info */}
      <div className="glass organic p-3 text-xs text-center text-gray-500">
        Click neurons to explore • Drag to rotate
      </div>
    </div>
  );
}
