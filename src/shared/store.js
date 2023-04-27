import { create } from "zustand";

// 메뉴 오픈 유무에 따른 관리
export const menuStore = create((set) => ({
  showMenu: false,
  setShowMenu: () => set((state) => ({ showMenu: !state.showMenu })),
}));
