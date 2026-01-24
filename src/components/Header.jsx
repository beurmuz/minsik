import React from "react";
import { menuStore } from "../shared/store";
import { Link } from "react-router-dom";
import menuWIcon from "../assets/images/icons/menuWIcon.webp";

const Header = () => {
  const { showMenu, setShowMenu } = menuStore((state) => state);
  const openMenu = () => {
    if (showMenu === false) setShowMenu();
  };
  return (
    <header className="w-full bg-black text-white">
      <div className="w-full max-w-6xl mx-auto px-6 py-3 flex flex-row justify-between">
        <Link
          to="/"
          className="rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          aria-label="홈으로 이동"
        >
          <h1 className="font-Pretendard text-3xl font-semibold ">SIK-K</h1>
        </Link>
        <button
          type="button"
          aria-label="메뉴 열기"
          onClick={openMenu}
          className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
        >
          <img
            src={menuWIcon}
            className="w-[36px] h-[36px]"
            alt=""
            aria-hidden="true"
          />
        </button>
      </div>
    </header>
  );
};

export default React.memo(Header);
