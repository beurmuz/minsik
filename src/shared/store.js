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
    releaseNums: 0,
    yearOfReleases: [],
    joinSongs: [],
    joinNums: 0,
    joinOfReleases: [],
    festivalDatas: [],

    setsReleaseSongs: (jsonData) => {
      set((state) => ({ releaseSongs: jsonData }));
      set((state) => ({ releaseNums: jsonData.length }));
    },
    setsJoinSongs: (jsonData) => {
      set((state) => ({ joinSongs: jsonData }));
      set((state) => ({ joinNums: jsonData.length }));
    },
    setsFestivalDatas: (jsonData) =>
      set((state) => ({ festivalDatas: jsonData })),
  }))
);
