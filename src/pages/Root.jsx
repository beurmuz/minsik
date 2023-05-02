import React from "react";
import { Outlet } from "react-router-dom";
import imageURL from "../assets/images/back.jpg";

export const Root = (props) => {
  return (
    <div
      className='App'
      class='w-screen h-screen bg-main-white bg-cover bg-center overflow-x-hidden'
      style={{
        backgroundImage: `url(${imageURL})`,
      }}
    >
      <Outlet />
    </div>
  );
};
