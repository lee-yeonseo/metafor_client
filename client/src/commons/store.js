import create from "zustand";

export const useStore = create((set) => ({
  name: null,
  setName: (value) => set({ name: value }),
}));
