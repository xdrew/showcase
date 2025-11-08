import { create } from 'zustand';
import { Project } from '@/data/projects';

interface StoreState {
  selectedProject: Project | null;
  hoveredProject: Project | null;
  selectedCategory: string | null;
  searchQuery: string;
  setSelectedProject: (project: Project | null) => void;
  setHoveredProject: (project: Project | null) => void;
  setSelectedCategory: (category: string | null) => void;
  setSearchQuery: (query: string) => void;
}

export const useStore = create<StoreState>((set) => ({
  selectedProject: null,
  hoveredProject: null,
  selectedCategory: null,
  searchQuery: '',
  setSelectedProject: (project) => set({ selectedProject: project }),
  setHoveredProject: (project) => set({ hoveredProject: project }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSearchQuery: (query) => set({ searchQuery: query }),
}));
