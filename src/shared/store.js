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
    releaseList: [],
    releaseNums: 0,
    releaseAlbums: [],

    setsReleaseList: (jsonData) => {
      set((state) => ({ releaseList: jsonData }));
      set((state) => ({ releaseNums: jsonData.length }));

      let ablumSet = {};
      for (let i = 0; i < jsonData.length; i++) {
        if (!ablumSet[jsonData[i].ablum]) {
          ablumSet[jsonData[i].ablum] = [
            jsonData[i].imgSource,
            jsonData[i].release,
          ];
        }
      }
      set((state) => ({ releaseAlbums: ablumSet }));
    },

    joinList: [],
    joinNums: 0,
    joinAlbums: [],

    setsJoinList: (jsonData) => {
      set((state) => ({ joinList: jsonData }));
      set((state) => ({ joinNums: jsonData.length }));

      let ablumJSet = {};
      for (let i = 0; i < jsonData.length; i++) {
        if (!ablumJSet[jsonData[i].ablum]) {
          ablumJSet[jsonData[i].ablum] = [
            jsonData[i].imgSource,
            jsonData[i].release,
          ];
        }
      }
      set((state) => ({ joinAlbums: ablumJSet }));
    },

    festivalDatas: [],

    setsFestivalDatas: (jsonData) =>
      set((state) => ({ festivalDatas: jsonData })),
  }))
);
