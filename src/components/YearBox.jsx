import React from "react";
import { TbPointFilled } from "react-icons/tb";

export const YearBox = ({ children }) => {
  return (
    <div className="flex flex-row mx-6">
      {/* <div className="w-5 h-5 border-8 border-main-blue-light rounded-full mx-0 my-auto" />*/}
      <div className="mx-2">
        <span className="m-auto animate-ping text-main-blue-light">
          <TbPointFilled size="30" />
        </span>
      </div>
      <h2 className="font-Pretendard text-3xl font-bold text-main-blue-light px-1">
        {children}
      </h2>
    </div>
  );
};

export default YearBox;
