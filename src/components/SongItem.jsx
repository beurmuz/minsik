import React from "react";
import basicImg from "../assets/images/music_basic.png";
import { BsThreeDotsVertical } from "react-icons/bs";

export const SongItem = ({ title, artists, imgSrc }) => {
  const onErrorImg = (e) => {
    e.target.src = basicImg;
  };

  return (
    <li class="text-black/8 border-b p-3 text-base list-none flex felx-row">
      <div class="w-10">
        <img src={imgSrc} onError={onErrorImg} alt="album" class="" />
      </div>
      <div class=" flex flex-col justify-between m-auto ml-3">
        <h2 class="font-normal text-base font-Pretendard">
          {title.length < 26 ? title : title.slice(0, 24) + " ..."}
          {/* {title} */}
        </h2>
        <h3 class=" text-xs font-Pretendard">
          {artists.length < 36 ? artists : artists.slice(0, 30) + " ..."}
          {/* {artists} */}
        </h3>
      </div>
      <div class="mx-1 my-auto">
        <BsThreeDotsVertical size="20" />
      </div>
    </li>
  );
};
