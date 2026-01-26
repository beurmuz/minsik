import React from "react";

const Loading = () => {
  return (
    <div
      className="w-full h-screen flex flex-row justify-center p-10 animate-fadeOutEffect"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <span
        className="w-7 h-7 my-auto rounded-full border-4 border-black/15 border-t-black animate-spin"
        aria-hidden="true"
      />
      <p className="text-main-color font-Pretendard font-semibold text-2xl my-auto px-3">
        <span className="sr-only">페이지를 불러오는 중입니다.</span>
        Loading ...
      </p>
    </div>
  );
};

export default Loading;
