import React from "react";

export const YearBox = ({ children }) => {
  return (
    <div className="flex flex-row mx-7">
      <div className="my-auto mx-3">
        <span class="relative flex h-3 w-3">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-main-blue-light opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-main-blue"></span>
        </span>
      </div>
      <h2 className="font-Pretendard text-3xl font-bold text-main-blue-light px-1 my-auto">
        {children}
      </h2>
    </div>
  );
};

export default YearBox;
