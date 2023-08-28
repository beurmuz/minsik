import React from "react";

export const DescriptionBox = ({ children }) => {
  return (
    <li className="text-black font-Pretendard rounded-md p-3 my-2 text-base list-none">
      {children}
    </li>
  );
};
