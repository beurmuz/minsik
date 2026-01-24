import React from "react";

const LatestSongModal = ({ songInfo, setShowModal }) => {
  //   const { imgSource, ablum, artists, release } = { ...songInfo };
  //   const closeModal = () => {
  //     setShowModal(!showModal);
  //   }

  return (
    <section className="flex flex-row m-auto w-screen h-screen animate-pageLoadEffect">
      <div className="fixed left-10 top-0 bottom-0 mx-0 my-auto w-[500px] h-[500px] bg-black rounded-full"></div>
      {/* <div className="w-1/2 sm:w-1/4">
        <img src={imgSource} className="w-full h-auto" alt="최신 앨범" />
      </div> */}
      {/* <article className="flex flex-col justify-center w-1/2 pl-5 md:w-3/4">
        <h3 className="font-Pretendard text-sm text-main-blue/80 font-bold">
          최신 앨범
        </h3>
        <p className="font-Pretendard text-4xl font-bold text-main-blue py-2 max-sm:text-2xl">
          {ablum}
        </p>
        <p className="font-Pretendard text-base max-sm:text-sm">
          {artists}
        </p>
        <p className="font-Pretendard text-base max-sm:text-sm">
          {release}
        </p>
      </article> */}
    </section>
  );
};

export default LatestSongModal;
