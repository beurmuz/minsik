import React from "react";
import { menuStore } from "../shared/store";
import { Link } from "react-router-dom";
import menuBIcon from "../assets/images/icons/menuBIcon.webp";
import menuWIcon from "../assets/images/icons/menuWIcon.webp";
import { SITE_CONTAINER } from "../shared/layout";

const Header = ({ changeColor }) => {
  const { showMenu, setShowMenu } = menuStore((state) => state);
  const openMenu = () => {
    if (showMenu === false) setShowMenu();
  };
  return changeColor ? (
    <header className="w-full text-main-color">
      <div className={`${SITE_CONTAINER} flex flex-row h-1/8 justify-between mt-12`}>
        <Link to="/">
          <h1 className="font-NotoSerif text-4xl font-semibold ">SIK-K</h1>
        </Link>
        <button
          type="button"
          aria-label="메뉴 열기"
          onClick={openMenu}
          className="focus:outline-none focus:ring-2 focus:ring-main-color focus:ring-offset-2 rounded"
        >
          <img
            src={menuBIcon}
            className="w-[40px] h-[40px]"
            alt=""
            aria-hidden="true"
          />
        </button>
      </div>
    </header>
  ) : (
    <header className="w-full text-white">
      <div className={`${SITE_CONTAINER} flex flex-row h-1/8 justify-between mt-12`}>
        <Link to="/">
          <h1 className="font-NotoSerif text-4xl font-semibold ">SIK-K</h1>
        </Link>
        <button
          type="button"
          aria-label="메뉴 열기"
          onClick={openMenu}
          className="focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded"
        >
          <img
            src={menuWIcon}
            className="w-[40px] h-[40px]"
            alt=""
            aria-hidden="true"
          />
        </button>
      </div>
    </header>
  );
};

export default React.memo(Header);
