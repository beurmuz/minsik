import React from "react";

export const YearBox = ({ children }) => {
  return (
    <div className="flex flex-row mx-9">
      <div className="w-5 h-5 border-8 border-main-blue-light rounded-full mx-0 my-auto"></div>
      <h2 className="font-Pretendard text-2xl font-bold text-main-blue-light px-2">
        {children}
      </h2>
    </div>
  );
};

export default YearBox;
