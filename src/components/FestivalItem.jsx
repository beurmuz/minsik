import React from "react";
import baseImg from "../assets/images/base_festival.png";

const FestivalItem = ({ festivalInfo }) => {
  const { imgUrl, title, id, link, date } = { ...festivalInfo };
  const onErrorImg = (e) => {
    e.target.src = baseImg;
  };

  return (
    <li className="flex-shrink-0">
      <div className="w-72 h-96 mr-5 bg-gray-300">
        <img
          className="w-full h-full object-contain"
          src={imgUrl}
          alt={title}
          onError={onErrorImg}
          loading="lazy"
        />
      </div>
      <ol className="py-5">
        <li className="text-7xl text-[#2C62B8] font-Pretendard font-bold py-1">
          {id + 1 < 10 ? "0" + (id + 1) : id + 1}
        </li>
        <li className=" text-[#77A0E1]">
          <a
            className="font-Pretendard text-xl font-bold"
            href={link}
            aria-describedby="클릭 시 상세 페이지로 넘어갑니다."
          >
            {title}
          </a>
        </li>
        <li className="font-Pretendard text-gray-700 font-semibold">{date}</li>
      </ol>
    </li>
  );
};

export default FestivalItem;
