import React from "react";
import { IoIosMenu } from "react-icons/io";

export const Header = (props) => {
  return (
    <div class='flex flex-row h-1/8 justify-between mx-7 mt-10 text-white'>
      <h1 class='font-NotoSerif text-5xl font-semibold '>SIK-K</h1>
      <button>
        <IoIosMenu size='50' />
      </button>
    </div>
  );
};
