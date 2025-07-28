import { create } from "zustand";

export const useVideoStore = create((set) => ({
  featuredVideo: null,
  playVideo: false,

  setFeaturedVideo: (video) =>
    set(() => ({
      featuredVideo: video,
      playVideo: false,
    })),

  startPlayVideoAfterDelay: () =>
    set(() => ({ playVideo: false }), false),

  enablePlayVideo: () =>
    set(() => ({ playVideo: true })),
}));
