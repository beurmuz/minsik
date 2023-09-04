import React, { useEffect, useState } from "react";
import { songsApi } from "../shared/axios";
import { dataStore } from "../shared/store";
import AblumModal from "./AlbumModal";

export const SongsList = (props) => {
  const {
    setsReleaseList,
    setsJoinList,
    releaseNums,
    // releaseList,
    releaseAlbums,
    joinNums,
    // joinList,
    joinAlbums,
  } = dataStore((state) => state);

  // const [ablumDatas, setAlbumDatas] = useState();
  const [showModal, setShowModal] = useState(false);
  const [orderState, setOrderState] = useState("release");

  // 발매 곡 데이터 받아오기
  const getSongsData = async () => {
    const result = await songsApi
      .get("songs_data.json")
      .then((res) => res.data)
      .catch((error) => console.log(error));
    setsReleaseList(result);
  };

  // 참여 곡 데이터 받아오기
  const getJoinSongsData = async () => {
    const result = await songsApi
      .get("join_songs_data.json")
      .then((res) => res.data)
      .catch((error) => console.log(error));
    setsJoinList(result);
  };

  useEffect(() => {
    getSongsData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getJoinSongsData();
    // eslint-disable-next-line
  }, []);

  const openModal = () => {
    setShowModal(!showModal);
  };
  // const clickAblum = (album) => {
  //   let keySongs = releaseList.filter((song) => song.ablum === album);
  //   setAlbumDatas(keySongs);
  //   setShowModal(!showModal);
  // };

  return (
    <div className="m-7 p-30 ">
      {/* <AblumModal /> */}
      {/* 전체곡 리스트 */}
      <div className="overflow-auto p-3">
        <div className="w-full mb-3 flex flex-row justify-between">
          <p className="font-Pretendard text-main-blue/80 text-xl font-bold">
            전체곡 ({releaseNums + joinNums})
          </p>
          <div className="">
            <button
              className="mr-3 font-Pretendard text-gray-500 hover:text-main-blue"
              onClick={(e) => setOrderState("release")}
            >
              발매 ({releaseNums})
            </button>
            <span className="border-r border-gray-500 h-4 my-auto"></span>
            <button
              className="ml-3 font-Pretendard text-gray-500 hover:text-main-blue"
              onClick={() => setOrderState("join")}
            >
              참여 ({joinNums})
            </button>
          </div>
        </div>
        <ol className="grid grid-cols-3 gap-3 min-[750px]:grid-cols-4 min-[1000px]:grid-cols-6">
          {releaseAlbums && orderState === "release"
            ? Object.keys(releaseAlbums).map((album, idx) => {
                return (
                  <>
                    <div onClick={() => openModal()}>
                      <img src={releaseAlbums[album][0]} alt="앨범 이미지" />
                    </div>
                    {showModal && (
                      <AblumModal
                        ablumName={album}
                        ablumRelease={releaseAlbums[album][1]}
                        // datas={ablumDatas}
                        musicSort={"R"}
                        showModal={showModal}
                        setShowModal={setShowModal}
                      />
                    )}
                  </>
                );
              })
            : Object.keys(joinAlbums).map((album, idx) => {
                return (
                  <div key={idx}>
                    <img src={joinAlbums[album][0]} alt="앨범 이미지" />
                  </div>
                );
              })}
        </ol>
        <p className="font-Pretendard text-sm py-5 text-gray-400">
          * 앨범은 최신순으로 정렬되어 있습니다.
        </p>
      </div>
    </div>
  );
};
