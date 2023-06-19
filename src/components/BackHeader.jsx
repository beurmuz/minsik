import React from "react";
import { RiArrowGoBackLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const BackHeader = (props) => {
  const navigate = useNavigate(); // navigation에 특정 순간을 넘기면 현재 페이지에서 해당 숫자만큼 히스토리 이동 가능

  return (
    <div class='flex flex-row h-1/8 justify-start mx-7 mt-10 text-main-blue'>
      <button onClick={() => navigate(-1)}>
        <RiArrowGoBackLine size='40' />
      </button>
    </div>
  );
};
