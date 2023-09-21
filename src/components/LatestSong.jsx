import React from "react";

const LatestSong = ({ songInfo }) => {
  const { imgSource, ablum, artists, release } = { ...songInfo };

  return (
    <section className="flex flex-row m-10 animate-pageLoadEffect">
      <div className="w-1/2 min-[600px]:w-1/4">
        <img src={imgSource} className="w-full h-auto" alt="최신 앨범" />
      </div>
      <article className="flex flex-col justify-center w-1/2 pl-5 min-[700px]:w-3/4">
        <h3 className="font-Pretendard text-sm text-main-blue/80 font-bold">
          최신 앨범
        </h3>
        <p className="font-Pretendard text-4xl font-bold text-main-blue py-2 max-[540px]:text-2xl">
          {ablum}
        </p>
        <p className="font-Pretendard text-base max-[540px]:text-sm">
          {artists}
        </p>
        <p className="font-Pretendard text-base max-[540px]:text-sm">
          {release}
        </p>
      </article>
    </section>
  );
};

export default LatestSong;
