import React from "react";

const FestivalBox = ({ festivalInfo }) => {
  const { imgUrl, title, id, link, date } = { ...festivalInfo };

  return (
    <div className="w-full">
      <div className="w-72">
        <img
          className="max-width: 100% height: auto"
          src={imgUrl}
          alt={title}
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
    </div>
  );
};

export default FestivalBox;
