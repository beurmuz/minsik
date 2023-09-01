import React from "react";

export const LatestSong = ({ songInfo }) => {
  const { imgSource, ablum, artists, release } = { ...songInfo };
  return (
    <div className="flex flex-row m-10 ">
      <div className="w-1/2 min-[600px]:w-1/4">
        <img src={imgSource} className="w-full h-auto" alt={ablum} />
      </div>
      <article className="flex flex-col justify-center w-1/2 pl-5 min-[700px]:w-3/4">
        <h3 class="font-Pretendard text-sm text-main-blue/80 font-bold pb-3 max-[540px]:pb-1">
          최신 앨범
        </h3>
        <p className="font-Pretendard text-4xl font-bold text-main-blue pb-2 max-[540px]:text-2xl">
          {ablum}
        </p>
        <p className="font-Pretendard text-xl max-[540px]:text-base">
          {artists}
        </p>
        <p className="font-Pretendard">{release}</p>
      </article>
    </div>
  );
};
