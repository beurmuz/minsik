import React from "react";
import { IoIosMenu } from "react-icons/io";
import { menuStore } from "../shared/store";
import { Link } from "react-router-dom";

export const Header = ({ changeColor }) => {
  const { showMenu, setShowMenu } = menuStore((state) => state);
  const openMenu = () => {
    if (showMenu === false) setShowMenu();
  };
  return changeColor ? (
    <div className="flex flex-row h-1/8 justify-between mx-10 mt-12 text-main-blue">
      <Link to="/">
        <h1 className="font-NotoSerif text-5xl font-semibold ">SIK-K</h1>
      </Link>
      <button onClick={openMenu}>
        <IoIosMenu size="50" />
      </button>
    </div>
  ) : (
    <div className="flex flex-row h-1/8 justify-between mx-10 mt-12 text-white">
      <Link to="/">
        <h1 className="font-NotoSerif text-5xl font-semibold ">SIK-K</h1>
      </Link>
      <button onClick={openMenu}>
        <IoIosMenu size="50" />
      </button>
    </div>
  );
};
