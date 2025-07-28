import { create } from 'zustand';

const useModalStore = create((set) => ({
    playerVideo: null,
    infoVideo: null,
    openPlayer: (video) => set({ playerVideo: video }),
    openInfo: (video) => set({ infoVideo: video }),
    closeModals: () => set({ playerVideo: null, infoVideo: null }),
}));

export default useModalStore;
