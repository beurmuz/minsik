import React from "react";
import baseImg from "../assets/images/base_festival.png";

const FestivalItem = ({ festivalInfo }) => {
  const { imgUrl, title, id, link, date } = { ...festivalInfo };
  const onErrorImg = (e) => {
    e.target.src = baseImg;
  };

  return (
    <li className="w-full">
      <div className="w-72">
        <img
          className="max-w-full h-auto"
          src={imgUrl}
          alt={title}
          onError={onErrorImg}
        />
      </div>
      <ol className="py-5">
        <li className="text-7xl text-main-blue/30 font-Pretendard font-bold py-1">
          {id + 1 < 10 ? "0" + (id + 1) : id + 1}
        </li>
        <li className=" text-main-blue-light/70">
          <a
            className="font-Pretendard text-xl font-bold"
            href={link}
            aria-describedby="클릭 시 상세 페이지로 넘어갑니다."
          >
            {title}
          </a>
        </li>
        <li className="font-Pretendard text-gray-500 font-semibold">{date}</li>
      </ol>
    </li>
  );
};

export default FestivalItem;
