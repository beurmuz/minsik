import React, { useEffect, useState } from "react";
import { songsApi } from "../shared/axios";
import { dataStore } from "../shared/store";
import AblumModal from "./AlbumModal";

const SongsList = (props) => {
  console.log("🎹 SongList 컴포넌트 호출");

  const {
    setsReleaseList,
    setsJoinList,
    releaseNums,
    releaseAlbums,
    joinNums,
    joinAlbums,
  } = dataStore((state) => state);

  const [clickedAlbum, setClickedAlbum] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [orderState, setOrderState] = useState("release");

  // 발매 곡 데이터 받아오기
  const getSongsData = async () => {
    const result = await songsApi
      .get("songs_data.json")
      .then((res) => res.data)
      .catch((error) => console.log(error));
    setsReleaseList(result);
    console.log("발매 노래 데이터 받아오기");
  };

  // 참여 곡 데이터 받아오기
  const getJoinSongsData = async () => {
    const result = await songsApi
      .get("join_songs_data.json")
      .then((res) => res.data)
      .catch((error) => console.log(error));
    setsJoinList(result);
    console.log("피처링 노래 데이터 받아오기");
  };

  useEffect(() => {
    getSongsData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getJoinSongsData();
    // eslint-disable-next-line
  }, []);

  const openModal = (nowInfo) => {
    setShowModal(!showModal);
    setClickedAlbum(nowInfo);
  };

  return (
    <section className="m-7 p-30 ">
      {showModal && (
        <AblumModal
          albumInfo={clickedAlbum}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      )}
      {/* 전체곡 리스트 */}
      <article className="overflow-auto p-3">
        <div className="w-full mb-3 flex flex-row justify-between">
          <p className="font-Pretendard text-main-blue/80 text-xl font-bold">
            전체곡 ({releaseNums + joinNums})
          </p>
          <nav>
            <button
              type="button"
              name="show the release song list"
              className="mr-3 font-Pretendard text-gray-500 hover:text-main-blue"
              onClick={(e) => setOrderState("release")}
            >
              발매 ({releaseNums})
            </button>
            <span className="border-r border-gray-500 h-4 my-auto"></span>
            <button
              type="button"
              name="show the join song list"
              className="ml-3 font-Pretendard text-gray-500 hover:text-main-blue"
              onClick={() => setOrderState("join")}
            >
              참여 ({joinNums})
            </button>
          </nav>
        </div>
        <ol className="grid grid-cols-3 gap-3 min-[750px]:grid-cols-4 min-[1000px]:grid-cols-6">
          {releaseAlbums && orderState === "release"
            ? Object.keys(releaseAlbums).map((album) => {
                return (
                  <li
                    key={album}
                    onClick={() =>
                      openModal([
                        album,
                        releaseAlbums[album][0],
                        releaseAlbums[album][1],
                        "R",
                      ])
                    }
                  >
                    <img src={releaseAlbums[album][0]} alt="앨범 이미지" />
                  </li>
                );
              })
            : Object.keys(joinAlbums).map((album) => {
                return (
                  <li
                    key={album}
                    onClick={() =>
                      openModal([
                        album,
                        joinAlbums[album][0],
                        joinAlbums[album][1],
                        "J",
                      ])
                    }
                  >
                    <img src={joinAlbums[album][0]} alt="앨범 이미지" />
                  </li>
                );
              })}
        </ol>
        <p className="font-Pretendard text-sm py-5 text-gray-500">
          * 앨범은 최신순으로 정렬되어 있습니다. <br />* 매주 수요일마다 정보가
          업데이트 됩니다.
        </p>
      </article>
    </section>
  );
};

export default SongsList;
