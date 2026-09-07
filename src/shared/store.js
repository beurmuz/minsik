import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getYear } from "../utils/date";

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
    releaseAlbums: {},
    releaseYears: [],

    setsReleaseList: (jsonData) => {
      if (!Array.isArray(jsonData)) return;

      // 1. 앨범별 대표 정보 추출 (중복 앨범 처리)
      const albumSet = {};
      for (let i = 0; i < jsonData.length; i++) {
        const item = jsonData[i];
        const albumKey = item.album || item.ablum; // 하위 호환성 유지
        if (albumKey && !albumSet[albumKey]) {
          albumSet[albumKey] = [item.imgSource, item.release];
        }
      }

      // 2. 연도별 발매 곡 수 집계
      const yearMap = new Map();
      for (let i = getYear(); i > 2014; i--) {
        yearMap.set(String(i), 0);
      }
      for (const song of jsonData) {
        if (song.release) {
          const year = song.release.split(".")[0];
          if (yearMap.has(year)) {
            yearMap.set(year, yearMap.get(year) + 1);
          }
        }
      }
      const yearList = Array.from(yearMap.entries());

      // 3. 단 한 번의 set()으로 모든 상태를 한꺼번에 원자적(Atomic) 업데이트
      set({
        releaseList: jsonData,
        releaseNums: jsonData.length,
        releaseAlbums: albumSet,
        releaseYears: yearList,
      });
    },

    joinList: [],
    joinNums: 0,
    joinAlbums: {},
    joinYears: [],

    setsJoinList: (jsonData) => {
      if (!Array.isArray(jsonData)) return;

      // 1. 참여 앨범별 대표 정보 추출
      const albumJSet = {};
      for (let i = 0; i < jsonData.length; i++) {
        const item = jsonData[i];
        const albumKey = item.album || item.ablum; // 하위 호환성 유지
        if (albumKey && !albumJSet[albumKey]) {
          albumJSet[albumKey] = [item.imgSource, item.release];
        }
      }

      // 2. 연도별 참여 곡 수 집계
      const yearMap = new Map();
      for (let i = 2015; i <= getYear(); i++) {
        yearMap.set(String(i), 0);
      }
      for (const song of jsonData) {
        if (song.release) {
          const year = song.release.split(".")[0];
          if (yearMap.has(year)) {
            yearMap.set(year, yearMap.get(year) + 1);
          }
        }
      }
      const yearList = Array.from(yearMap.entries());

      // 3. 단 한 번의 set()으로 상태 업데이트
      set({
        joinList: jsonData,
        joinNums: jsonData.length,
        joinAlbums: albumJSet,
        joinYears: yearList,
      });
    },

    festivalDatas: [],

    setsFestivalDatas: (jsonData) =>
      set({ festivalDatas: jsonData }),
  }))
);