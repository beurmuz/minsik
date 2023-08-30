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
      <article className="py-5">
        <p className="text-7xl text-main-blue/30 font-extrabold py-1">
          {id + 1 < 10 ? "0" + (id + 1) : id + 1}
        </p>
        <p className=" text-main-blue-light/70">
          <a className="font-Pretendard text-xl font-bold" href={link}>
            {title}
          </a>
        </p>
        <p className="font-Pretendard text-gray-500 font-semibold">{date}</p>
      </article>
    </li>
  );
};

export default FestivalItem;
