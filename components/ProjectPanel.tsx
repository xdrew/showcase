'use client';

import { useStore } from '@/lib/store';
import { categories } from '@/data/projects';
import { motion, AnimatePresence } from 'framer-motion';

export function ProjectPanel() {
  const selectedProject = useStore((state) => state.selectedProject);
  const setSelectedProject = useStore((state) => state.setSelectedProject);
  const setSelectedPlanetPosition = useStore((state) => state.setSelectedPlanetPosition);

  const category = categories.find(c => c.id === selectedProject?.category);

  const handleClose = () => {
    setSelectedProject(null);
    setSelectedPlanetPosition(null);
  };

  return (
    <AnimatePresence>
      {selectedProject && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed right-0 top-0 h-screen w-96 p-6 flex flex-col gap-4 z-20"
        >
          <div className="glass-strong organic p-6 flex-1 overflow-y-auto">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="float-right glass organic px-3 py-1 text-sm hover:glass-strong transition-all"
            >
              ✕
            </button>

            {/* Category badge */}
            {category && (
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
                style={{
                  backgroundColor: `${category.color}20`,
                  color: category.color,
                  border: `1px solid ${category.color}40`,
                }}
              >
                {category.name}
                {selectedProject.subcategory && ` • ${selectedProject.subcategory}`}
              </div>
            )}

            {/* Project name */}
            <h2 className="text-2xl font-bold mb-2 mt-2">
              {selectedProject.name}
            </h2>

            {/* Description */}
            <p className="text-gray-300 mb-6 leading-relaxed">
              {selectedProject.description}
            </p>

            {/* Stats */}
            {selectedProject.contractCount && (
              <div className="glass organic p-4 mb-6">
                <div className="text-sm text-gray-400 mb-1">Smart Contracts</div>
                <div
                  className="text-3xl font-bold"
                  style={{ color: category?.color }}
                >
                  {selectedProject.contractCount}
                </div>
              </div>
            )}

            {/* Links */}
            {selectedProject.links && Object.keys(selectedProject.links).length > 0 && (
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Links
                </h3>
                {selectedProject.links.website && (
                  <a
                    href={selectedProject.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block glass organic px-4 py-3 hover:glass-strong transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🌐</span>
                      <div>
                        <div className="font-medium">Website</div>
                        <div className="text-xs text-gray-400">Visit project site</div>
                      </div>
                    </div>
                  </a>
                )}
                {selectedProject.links.twitter && (
                  <a
                    href={selectedProject.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block glass organic px-4 py-3 hover:glass-strong transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">𝕏</span>
                      <div>
                        <div className="font-medium">Twitter</div>
                        <div className="text-xs text-gray-400">Follow on X</div>
                      </div>
                    </div>
                  </a>
                )}
                {selectedProject.links.github && (
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block glass organic px-4 py-3 hover:glass-strong transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">💻</span>
                      <div>
                        <div className="font-medium">GitHub</div>
                        <div className="text-xs text-gray-400">View source code</div>
                      </div>
                    </div>
                  </a>
                )}
                {selectedProject.links.docs && (
                  <a
                    href={selectedProject.links.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block glass organic px-4 py-3 hover:glass-strong transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">📚</span>
                      <div>
                        <div className="font-medium">Documentation</div>
                        <div className="text-xs text-gray-400">Read the docs</div>
                      </div>
                    </div>
                  </a>
                )}
              </div>
            )}

            {/* Visual decoration */}
            <div
              className="mt-8 h-1 rounded-full opacity-50"
              style={{
                background: `linear-gradient(90deg, transparent, ${category?.color}, transparent)`,
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
