import React from "react";
import { IoIosMenu } from "react-icons/io";

export const Header = (props) => {
  return (
    <div class='flex flex-row justify-between p-5'>
      <h1 class='font-Pretendard text-3xl font-bold '>SIK-K</h1>
      <IoIosMenu size='40' />
    </div>
  );
};
