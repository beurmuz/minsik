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
    releaseYears: [],

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

      let yearMap = new Map();
      for (let i = 2023; i > 2014; i--) {
        yearMap.set(String(i), 0);
      }
      for (let song of jsonData) {
        let year = song.release.split(".")[0];
        yearMap.set(year, yearMap.get(year) + 1);
      }
      let yearList = [];
      for (let [year, count] of yearMap.entries()) {
        yearList.push([year, count]);
      }
      set((state) => ({ releaseYears: yearList }));
    },

    joinList: [],
    joinNums: 0,
    joinAlbums: [],
    joinYears: [],

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

      let yearMap = new Map();
      for (let i = 2015; i < 2024; i++) {
        yearMap.set(String(i), 0);
      }
      for (let song of jsonData) {
        let year = song.release.split(".")[0];
        yearMap.set(year, yearMap.get(year) + 1);
      }
      let yearList = [];
      for (let [year, count] of yearMap.entries()) {
        yearList.push([year, count]);
      }
      set((state) => ({ joinYears: yearList }));
    },

    festivalDatas: [],

    setsFestivalDatas: (jsonData) =>
      set((state) => ({ festivalDatas: jsonData })),
  }))
);
