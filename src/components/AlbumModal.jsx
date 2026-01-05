import React, { useEffect, useState } from "react";
import { dataStore } from "../shared/store";
import closeIcon from "../assets/images/icons/closeIcon.webp";
import linkIcon from "../assets/images/icons/linkIcon.webp";

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
    $body.ariaHidden = true;
    return () => {
      $body.style.overflow = overflow;
    };
    // eslint-disable-next-line
  }, []);

  const closeModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-gray-500/50 flex justify-center align-middle animate-ablumModalLoadEffect"
      role="alertdialog"
      aria-modal="true"
    >
      <nav className="flex flex-col w-5/6 md:w-3/4 lg:w-3/5 h-4/5 fixed top-0 bottom-0 left-0 right-0 m-auto pb-10 text-center z-99 bg-white rounded-md ">
        <div className="flex flex-row justify-between">
          <span />
          <button
            type="button"
            name="close modal"
            onClick={closeModal}
            className="hover:cursor-pointer text-main-blue mt-6 mr-7"
          >
            <img
              src={closeIcon}
              className="w-[30px] h-[30px]"
              alt="close Icon"
            />
          </button>
        </div>

        <article className="flex flex-col w-full px-10 overflow-y-auto ">
          <div className="flex flex-row pt-3">
            <div className="p-auto w-1/4">
              <img src={albumImgSrc} alt={`${albumName} img`} />
            </div>
            <div className="flex flex-col w-full my-auto ml-3 text-left ">
              <h3 className="font-Pretendard text-xl font-bold text-main-blue leading-snug">
                {albumName}
              </h3>
              <h4 className="font-Pretendard text-sm text-main-blue">
                발매일: {albumDate}
              </h4>
            </div>
          </div>
          <p className="w-full text-left font-Pretendard text-main-blue text-base font-bold pt-7">
            수록곡 ({albumData.length})
          </p>
          <ul className="flex flex-col justify-center text-left pb-3">
            {albumData.map((song, index) => {
              return (
                <li
                  key={song.title}
                  className="flex flex-row font-Pretendard text-base text-black/8 border-b py-2 "
                >
                  <span className="w-7 mx-auto font-Pretendard text-main-blue">
                    {index + 1 < 10 ? "0" + (index + 1) : index + 1}
                  </span>
                  <div className="flex flex-col w-full justify-between m-auto text-start pl-2">
                    <p className="font-medium text-sm font-Pretendard ">
                      {song.title}
                    </p>
                    <p className=" text-xs font-Pretendard">{song.artists}</p>
                  </div>
                  <a
                    href={`https://www.melon.com/song/detail.htm?songId=${song.songId}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-describedby="클릭 시 멜론 페이지로 연결됩니다."
                    className="w-6 my-auto"
                  >
                    <img src={linkIcon} alt={`${song.title} link icon`} />
                  </a>
                </li>
              );
            })}
          </ul>
        </article>
      </nav>
    </div>
  );
};

export default AblumModal;
