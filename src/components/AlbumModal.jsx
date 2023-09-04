import React, { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { dataStore } from "../shared/store";

const AblumModal = ({
  ablumName,
  ablumRelease,
  // datas,
  musicSort,
  showModal,
  setShowModal,
}) => {
  const { releaseList, joinList } = dataStore((state) => state);
  const [ablumData, setAlbumDatas] = useState([]);
  const renderAblumList = () => {
    if (musicSort === "R") {
      let keySongs = releaseList.filter((song) => song.ablum === ablumName);
      setAlbumDatas(keySongs);
    } else {
      let keySongs = joinList.filter((song) => song.ablum === ablumName);
      setAlbumDatas(keySongs);
    }
  };

  useEffect(() => {
    renderAblumList();
    // eslint-disable-next-line
  }, []);

  const closeModal = () => {
    setShowModal(!showModal);
  };

  console.log(...ablumData);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-gray-500/50 flex justify-center align-middle">
      <div className="w-5/6 h-4/6 fixed top-0 bottom-0 left-0 right-0 m-auto text-center z-99 bg-main-white flex flex-col justify-between rounded-md">
        <div className="flex flex-row justify-between">
          <span />
          <button
            onClick={closeModal}
            className="hover:cursor-pointer text-main-blue mt-7 mr-4"
          >
            <IoIosClose size="40" />
          </button>
        </div>
        <div className="flex flex-row">
          <div>
            <h1 className="font-Pretendard">{ablumName}</h1>
            <p className="font-Pretendard">{ablumRelease}</p>
          </div>
        </div>
        <ul className="h-full flex flex-col justify-center text-left text-4xl text-main-blue">
          {/* {datas.map((song) => {
            return <li>{song.title}</li>;
          })} */}
        </ul>
      </div>
    </div>
  );
};

export default AblumModal;
