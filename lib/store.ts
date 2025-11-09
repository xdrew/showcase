import { create } from 'zustand';
import { Project } from '@/data/projects';

interface StoreState {
  selectedProject: Project | null;
  hoveredProject: Project | null;
  selectedCategory: string | null;
  searchQuery: string;
  rocketPosition: [number, number, number];
  setSelectedProject: (project: Project | null) => void;
  setHoveredProject: (project: Project | null) => void;
  setSelectedCategory: (category: string | null) => void;
  setSearchQuery: (query: string) => void;
  setRocketPosition: (position: [number, number, number]) => void;
}

export const useStore = create<StoreState>((set) => ({
  selectedProject: null,
  hoveredProject: null,
  selectedCategory: null,
  searchQuery: '',
  rocketPosition: [0, 0, 50],
  setSelectedProject: (project) => set({ selectedProject: project }),
  setHoveredProject: (project) => set({ hoveredProject: project }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setRocketPosition: (position) => set({ rocketPosition: position }),
}));
