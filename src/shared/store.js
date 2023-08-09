import { create } from "zustand";
import { devtools } from "zustand/middleware";

// 메뉴 오픈 유무에 따른 관리
export const menuStore = create(
  devtools((set) => ({
    showMenu: false,
    setShowMenu: () => set((state) => ({ showMenu: !state.showMenu })),
  }))
);

// 곡 관련 정보 저장
export const songsStore = create(
  devtools((set) => ({
    songs: [],
    setsSongs: (song) => set((state) => ({ songs: song })),
  }))
);

export const joinSongsStore = create(
  devtools((set) => ({
    joinSongs: [],
    setsJoinSongs: (song) => set((state) => ({ joinSongs: song })),
  }))
);
