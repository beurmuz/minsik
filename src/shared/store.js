import { create } from "zustand";
import { devtools } from "zustand/middleware";

// 메뉴 오픈 유무에 따른 관리
export const menuStore = create(
  devtools((set) => ({
    showMenu: false,
    setShowMenu: () => set((state) => ({ showMenu: !state.showMenu })),
  }))
);

// api로 받아온 데이터 저장
export const dataStore = create(
  devtools((set) => ({
    releaseSongs: [],
    joinSongs: [],
    // songsData: [],
    festivalDatas: [],
    // setsSongsData: (jsonData) =>
    //   set((state) => ({ songsData: [...state.songsData, ...jsonData] })),
    setsReleaseSongs: (jsonData) =>
      set((state) => ({ releaseSongs: jsonData })),
    setsJoinSongs: (jsonData) => set((state) => ({ joinSongs: jsonData })),
    setsFestivalDatas: (jsonData) =>
      set((state) => ({ festivalDatas: jsonData })),
  }))
);
