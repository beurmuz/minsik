import React, { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { dataStore } from "../shared/store";
import baseImg from "../assets/images/base_music.png";

const AblumModal = ({ albumInfo, showModal, setShowModal }) => {
  const [albumName, albumImgSrc, albumDate, ablumSort] = [...albumInfo];
  const { releaseList, joinList } = dataStore((state) => state);
  const [albumData, setAlbumDatas] = useState([]);

  const renderAblumList = () => {
    if (ablumSort === "R") {
      let keySongs = releaseList.filter((song) => song.ablum === albumName);
      setAlbumDatas(keySongs);
    } else {
      let keySongs = joinList.filter((song) => song.ablum === albumName);
      setAlbumDatas(keySongs);
    }
  };

  useEffect(() => {
    albumData && renderAblumList();
    // 외부 스크롤 막기
    const $body = document.querySelector("body");
    const overflow = $body.style.overflow;
    $body.style.overflow = "hidden";
    return () => {
      $body.style.overflow = overflow;
    };
    // eslint-disable-next-line
  }, []);

  const closeModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-gray-500/50 flex justify-center align-middle">
      <div className="flex flex-col w-5/6 h-5/6 fixed top-0 bottom-0 left-0 right-0 m-auto pb-14 text-center z-99 bg-white rounded-md">
        <div className="flex flex-row justify-between">
          <span />
          <button
            onClick={closeModal}
            className="hover:cursor-pointer text-main-blue mt-7 mr-4"
          >
            <IoIosClose size="40" />
          </button>
        </div>

        <article className="flex flex-col w-full px-7 overflow-y-auto ">
          <div className="flex flex-row">
            <div className="p-auto w-1/4">
              <img src={albumImgSrc} alt={`${albumName} img`} />
            </div>
            <div className="flex flex-col w-full my-auto ml-3 text-left ">
              <h1 className="font-Pretendard text-xl font-bold text-main-blue">
                {albumName}
              </h1>
              <h2 className="font-Pretendard text-sm text-main-blue">
                발매일: {albumDate}
              </h2>
            </div>
          </div>
          <p className="w-full text-left font-Pretendard text-main-blue text-base font-bold pt-7">
            수록곡 ({albumData.length})
          </p>
          <ul className="flex flex-col justify-center text-left pb-3">
            {albumData.map((song) => {
              return (
                <li
                  key={song.title}
                  className="flex flex-row font-Pretendard text-base text-black/8 border-b py-2"
                >
                  <div className="w-10">
                    <img src={baseImg} alt="album" />
                  </div>
                  <div className="flex flex-col w-full justify-between m-auto text-start pl-2">
                    <h2 className="font-normal text-sm font-Pretendard">
                      {song.title}
                    </h2>
                    <h3 className=" text-xs font-Pretendard">{song.artists}</h3>
                  </div>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </div>
  );
};

export default AblumModal;
