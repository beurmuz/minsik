import React from "react";
import { RiArrowGoBackLine } from "react-icons/ri";

export const BackHeader = (props) => {
  const openMenu = () => {
    window.history.go(-1); // 임시
  };
  return (
    <div class='flex flex-row h-1/8 justify-start mx-7 mt-10 text-white'>
      <button onClick={openMenu}>
        <RiArrowGoBackLine size='40' />
      </button>
    </div>
  );
};
