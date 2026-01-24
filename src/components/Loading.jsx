import React from "react";
import loadIcon from "../assets/images/icons/loadIcon.webp";

const Loading = (props) => {
  return (
    <div
      className="w-full h-screen flex flex-row justify-center p-10 animate-fadeOutEffect"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <span className="w-[40px] my-auto">
        <img
          src={loadIcon}
          className="animate-spin"
          alt=""
          aria-hidden="true"
        />
      </span>
      <p className="text-black font-Pretendard font-semibold text-2xl my-auto px-3">
        <span className="sr-only">페이지를 불러오는 중입니다.</span>
        Loading ...
      </p>
    </div>
  );
};

export default Loading;
