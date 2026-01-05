import React from "react";
import { useNavigate } from "react-router-dom";
import backIcon from "../assets/images/icons/backIcon.webp";

const BackHeader = (props) => {
  const navigate = useNavigate(); // navigation에 특정 순간을 넘기면 현재 페이지에서 해당 숫자만큼 히스토리 이동 가능

  return (
    <div className="flex flex-row h-1/8 justify-start mx-7 mt-10 text-main-blue">
      <button
        onClick={() => navigate(-1)}
        aria-label="이전 페이지로 돌아가기"
        className="focus:outline-none focus:ring-2 focus:ring-main-blue focus:ring-offset-2 rounded"
      >
        <img
          src={backIcon}
          className="w-[50px] h-[50px]"
          alt=""
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

export default BackHeader;
