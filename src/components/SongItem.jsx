import React from "react";
import basicImg from "../assets/images/music_basic.png";
import { BsThreeDotsVertical } from "react-icons/bs";

export const SongItem = ({ title, artists, imgSrc }) => {
  const onErrorImg = (e) => {
    e.target.src = basicImg;
  };

  return (
    <li className="text-black/8 border-b p-3 text-base list-none flex felx-row">
      <div className="w-10">
        <img src={imgSrc} onError={onErrorImg} alt="album" />
      </div>
      <div className=" flex flex-col justify-between m-auto ml-3">
        <h2 className="font-normal text-base font-Pretendard">
          {title.length < 26 ? title : title.slice(0, 24) + " ..."}
          {/* {title} */}
        </h2>
        <h3 className=" text-xs font-Pretendard">
          {artists.length < 36 ? artists : artists.slice(0, 30) + " ..."}
          {/* {artists} */}
        </h3>
      </div>
      <div className="mx-1 my-auto">
        <BsThreeDotsVertical size="20" />
      </div>
    </li>
  );
};
