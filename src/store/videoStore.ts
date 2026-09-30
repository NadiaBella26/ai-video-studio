import { create } from 'zustand';
import { VideoProject, VideoScene, GenerationStatus } from '@/types';

interface VideoStore {
  currentProject: VideoProject | null;
  isGenerating: boolean;
  generationStatus: GenerationStatus;
  selectedSceneId: string | null;
  
  setCurrentProject: (project: VideoProject | null) => void;
  updateProject: (updates: Partial<VideoProject>) => void;
  setIsGenerating: (value: boolean) => void;
  setGenerationStatus: (status: GenerationStatus) => void;
  setSelectedSceneId: (id: string | null) => void;
  updateScene: (sceneId: string, updates: Partial<VideoScene>) => void;
  addScene: (scene: VideoScene) => void;
  deleteScene: (sceneId: string) => void;
  reorderScenes: (scenes: VideoScene[]) => void;
  reset: () => void;
}

export const useVideoStore = create<VideoStore>((set) => ({
  currentProject: null,
  isGenerating: false,
  generationStatus: 'idle',
  selectedSceneId: null,

  setCurrentProject: (project) => set({ currentProject: project }),
  
  updateProject: (updates) => set((state) => ({
    currentProject: state.currentProject
      ? { ...state.currentProject, ...updates }
      : null,
  })),

  setIsGenerating: (value) => set({ isGenerating: value }),
  
  setGenerationStatus: (status) => set({ generationStatus: status }),
  
  setSelectedSceneId: (id) => set({ selectedSceneId: id }),
  
  updateScene: (sceneId, updates) => set((state) => ({
    currentProject: state.currentProject
      ? {
          ...state.currentProject,
          scenes: state.currentProject.scenes.map((scene) =>
            scene.id === sceneId ? { ...scene, ...updates } : scene
          ),
        }
      : null,
  })),

  addScene: (scene) => set((state) => ({
    currentProject: state.currentProject
      ? {
          ...state.currentProject,
          scenes: [...state.currentProject.scenes, scene],
        }
      : null,
  })),

  deleteScene: (sceneId) => set((state) => ({
    currentProject: state.currentProject
      ? {
          ...state.currentProject,
          scenes: state.currentProject.scenes.filter(
            (scene) => scene.id !== sceneId
          ),
        }
      : null,
  })),

  reorderScenes: (scenes) => set((state) => ({
    currentProject: state.currentProject
      ? { ...state.currentProject, scenes }
      : null,
  })),

  reset: () => set({
    currentProject: null,
    isGenerating: false,
    generationStatus: 'idle',
    selectedSceneId: null,
  }),
}));
