import React from "react";
import baseImg from "../assets/images/base_festival.png";

const FestivalItem = ({ festivalInfo }) => {
  const { imgUrl, title, link, date } = { ...festivalInfo };
  const onErrorImg = (e) => {
    e.target.src = baseImg;
  };

  return (
    <li className="list-none">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        aria-describedby="클릭 시 상세 페이지로 넘어갑니다."
        className="group block rounded-xl border border-black/10 bg-white overflow-hidden transition hover:border-black/20 hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
      >
        <div className="aspect-[4/5] bg-gray-100">
          <img
            className="w-full h-full object-cover"
            src={imgUrl}
            alt={title}
            onError={onErrorImg}
          />
        </div>
        <div className="p-4">
          <p className="font-Pretendard text-xs text-gray-700">
            {date}
          </p>
          <p className="mt-1 font-Pretendard text-sm font-semibold text-black line-clamp-2">
            {title}
          </p>
          <span className="mt-3 inline-block font-Pretendard text-xs text-black/70 group-hover:text-black">
            자세히 보기 →
          </span>
        </div>
      </a>
    </li>
  );
};

export default FestivalItem;
