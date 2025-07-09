import { create } from "zustand";

interface ProgressState {
  progress: number;
  setProgress: (value: number) => void;
}

const useProgressStore = create<ProgressState>((set) => ({
  progress: 20, // Initial state
  setProgress: (value) => set({ progress: value }),
}));

export default useProgressStore;
