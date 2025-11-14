import { create } from 'zustand';
import { Project } from '@/data/projects';

interface TouchControls {
  thrust: number;
  rotation: number;
  vertical: number;
}

interface StoreState {
  selectedProject: Project | null;
  hoveredProject: Project | null;
  selectedCategory: string | null;
  searchQuery: string;
  rocketPosition: [number, number, number];
  rocketRotation: [number, number, number];
  selectedPlanetPosition: [number, number, number] | null;
  tourStarted: boolean;
  soundEnabled: boolean;
  touchControls: TouchControls;
  setSelectedProject: (project: Project | null) => void;
  setHoveredProject: (project: Project | null) => void;
  setSelectedCategory: (category: string | null) => void;
  setSearchQuery: (query: string) => void;
  setRocketPosition: (position: [number, number, number]) => void;
  setRocketRotation: (rotation: [number, number, number]) => void;
  setSelectedPlanetPosition: (position: [number, number, number] | null) => void;
  setTourStarted: (started: boolean) => void;
  setSoundEnabled: (enabled: boolean) => void;
  setTouchControls: (controls: TouchControls) => void;
}

export const useStore = create<StoreState>((set) => ({
  selectedProject: null,
  hoveredProject: null,
  selectedCategory: null,
  searchQuery: '',
  rocketPosition: [0, 0, 50],
  rocketRotation: [0, Math.PI, 0],
  selectedPlanetPosition: null,
  tourStarted: false,
  soundEnabled: true,
  touchControls: { thrust: 0, rotation: 0, vertical: 0 },
  setSelectedProject: (project) => set({ selectedProject: project }),
  setHoveredProject: (project) => set({ hoveredProject: project }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setRocketPosition: (position) => set({ rocketPosition: position }),
  setRocketRotation: (rotation) => set({ rocketRotation: rotation }),
  setSelectedPlanetPosition: (position) => set({ selectedPlanetPosition: position }),
  setTourStarted: (started) => set({ tourStarted: started }),
  setSoundEnabled: (enabled) => set({ soundEnabled: enabled }),
  setTouchControls: (controls) => set({ touchControls: controls }),
}));
