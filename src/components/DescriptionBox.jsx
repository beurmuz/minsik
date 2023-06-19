import React from "react";

export const DescriptionBox = ({ children }) => {
  return (
    <li class='text-black font-NotoKo rounded-md p-3 my-3 text-base list-none'>
      {children}
    </li>
  );
};
