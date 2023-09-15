import React from "react";

const YearBox = ({ children }) => {
  return (
    <div className="flex flex-row mx-7">
      <div className="my-auto mx-3">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-main-blue-light opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-main-blue"></span>
        </span>
      </div>
      <h3 className="font-Pretendard text-3xl font-bold text-main-blue-light px-1 my-auto">
        {children}
      </h3>
    </div>
  );
};

export default YearBox;
