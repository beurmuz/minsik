import React from "react";
import loadIcon from "../assets/images/icons/loadIcon.webp";

const Loading = (props) => {
  return (
    <div className=" w-screen h-screen flex flex-row justify-center p-10 animate-fadeOutEffect">
      <span className="w-[40px] my-auto">
        <img src={loadIcon} className="animate-spin" alt="loading Spinner" />
      </span>
      <p
        type="button"
        className="text-main-blue font-Pretendard font-semibold text-2xl my-auto px-3"
      >
        Loading ...
      </p>
    </div>
  );
};

export default Loading;
