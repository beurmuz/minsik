import React, { useEffect, useState } from "react";
import { DataFetchApi } from "../shared/axios";
import { dataStore } from "../shared/store";
import AlbumModal from "./AlbumModal";

const SongsList = (props) => {
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
    const result = await DataFetchApi.get("songs_data.json")
      .then((res) => res.data)
      .catch((error) => console.log(error));
    setsReleaseList(result);
  };

  // 참여 곡 데이터 받아오기
  const getJoinSongsData = async () => {
    const result = await DataFetchApi.get("join_songs_data.json")
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

  const openModal = (nowInfo) => {
    setClickedAlbum(nowInfo);
    setShowModal(true);
  };

  return (
    <section className="w-full animate-pageLoadEffect">
      {showModal && (
        <AlbumModal
          albumInfo={clickedAlbum}
          onClose={() => setShowModal(false)}
        />
      )}
      {/* 전체곡 리스트 */}
      <article className="overflow-auto p-3">
        <div className="w-full mb-3 flex flex-row justify-between">
          <p className="font-Pretendard text-main-blue/80 text-xl font-bold">
            전체곡 ({releaseNums + joinNums})
          </p>
          <nav className="flex flex-row">
            <button
              type="button"
              aria-label={`발매 곡 목록 보기, 총 ${releaseNums}개`}
              aria-pressed={orderState === "release"}
              className="mr-2 font-Pretendard text-gray-700 hover:text-main-blue focus:outline-none focus:ring-2 focus:ring-main-blue focus:ring-offset-2 rounded px-2"
              onClick={(e) => setOrderState("release")}
            >
              발매 ({releaseNums})
            </button>
            <span
              className="border-r border-gray-400 h-4 my-auto"
              aria-hidden="true"
            ></span>
            <button
              type="button"
              aria-label={`참여 곡 목록 보기, 총 ${joinNums}개`}
              aria-pressed={orderState === "join"}
              className="ml-2 font-Pretendard text-gray-700 hover:text-main-blue focus:outline-none focus:ring-2 focus:ring-main-blue focus:ring-offset-2 rounded px-2"
              onClick={() => setOrderState("join")}
            >
              참여 ({joinNums})
            </button>
          </nav>
        </div>
        <ol className="grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-6">
          {releaseAlbums && orderState === "release"
            ? Object.keys(releaseAlbums).map((album) => {
                return (
                  <li
                    key={album}
                    role="button"
                    tabIndex={0}
                    aria-label={`${album} 앨범 상세 정보 보기`}
                    onClick={() =>
                      openModal([
                        album,
                        releaseAlbums[album][0],
                        releaseAlbums[album][1],
                        "R",
                      ])
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openModal([
                          album,
                          releaseAlbums[album][0],
                          releaseAlbums[album][1],
                          "R",
                        ]);
                      }
                    }}
                    className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-main-blue rounded"
                  >
                    <img
                      src={releaseAlbums[album][0]}
                      alt={`${album} 앨범 커버`}
                      loading="lazy"
                    />
                  </li>
                );
              })
            : Object.keys(joinAlbums).map((album) => {
                return (
                  <li
                    key={album}
                    role="button"
                    tabIndex={0}
                    aria-label={`${album} 앨범 상세 정보 보기`}
                    onClick={() =>
                      openModal([
                        album,
                        joinAlbums[album][0],
                        joinAlbums[album][1],
                        "J",
                      ])
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openModal([
                          album,
                          joinAlbums[album][0],
                          joinAlbums[album][1],
                          "J",
                        ]);
                      }
                    }}
                    className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-main-blue rounded"
                  >
                    <img
                      src={joinAlbums[album][0]}
                      alt={`${album} 앨범 커버`}
                      loading="lazy"
                    />
                  </li>
                );
              })}
        </ol>
        <p className="font-Pretendard text-sm py-5 text-gray-700">
          * 앨범은 최신순으로 정렬되어 있습니다. <br />* 매주 수요일 오전
          9시마다 정보가 업데이트 됩니다.
        </p>
      </article>
    </section>
  );
};

export default SongsList;
