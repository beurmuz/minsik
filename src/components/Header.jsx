import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";

export const Header = (props) => {
  const [menuModal, setMenuModal] = useState(false);
  const showMenu = () => {
    setMenuModal(true);
    console.log("메뉴를 눌렀다.");
  };
  return (
    <div class='flex flex-row h-1/8 justify-between mx-7 mt-10 text-white'>
      <h1 class='font-NotoSerif text-5xl font-semibold '>SIK-K</h1>
      <button onClick={showMenu}>
        <IoIosMenu size='50' />
      </button>
    </div>
  );
};
