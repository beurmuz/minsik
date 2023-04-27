import React from "react";

export const DescriptionBox = ({ children }) => {
  return (
    <li class='text-main-blue font-NotoSerif rounded-md p-3 my-3 text-xl'>
      {children}
    </li>
  );
};
