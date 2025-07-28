import { create } from 'zustand';

const useSidebarStore = create(set => ({
  isOpen: false,
  setSidebarOpen: (value) => set({ isOpen: value }),
}));

export default useSidebarStore;