import React from "react";

export const DescriptionBox = ({ children }) => {
  return (
    <li class='text-black font-NotoKo rounded-md p-3 my-2 text-base list-none'>
      {children}
    </li>
  );
};
