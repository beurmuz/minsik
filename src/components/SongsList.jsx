import React, { useEffect, useState } from "react";
import { DataFetchApi } from "../shared/axios";
import { dataStore } from "../shared/store";
import AlbumModal from "./AlbumModal";

const SongsList = () => {
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

  useEffect(() => {
    let cancelled = false;

    const fetchSongs = async () => {
      const result = await DataFetchApi.get("songs_data.json")
        .then((res) => res.data)
        .catch((error) => {
          console.log(error);
          return [];
        });
      if (!cancelled) setsReleaseList(result);
    };

    const fetchJoinSongs = async () => {
      const result = await DataFetchApi.get("join_songs_data.json")
        .then((res) => res.data)
        .catch((error) => {
          console.log(error);
          return [];
        });
      if (!cancelled) setsJoinList(result);
    };

    fetchSongs();
    fetchJoinSongs();

    return () => {
      cancelled = true;
    };
  }, [setsJoinList, setsReleaseList]);

  const openModal = (nowInfo) => {
    setClickedAlbum(nowInfo);
    setShowModal(true);
  };

  return (
    <section className="w-full">
      {showModal && (
        <AlbumModal
          albumInfo={clickedAlbum}
          onClose={() => setShowModal(false)}
        />
      )}
      {/* 전체곡 리스트 */}
      <article className="overflow-auto">
        <div className="w-full mb-3 flex flex-row justify-between py-3">
          <p className="font-Pretendard text-black text-xl font-bold">
            전체곡 ({releaseNums + joinNums})
          </p>
          <nav className="flex flex-row">
            <button
              type="button"
              aria-label={`발매 곡 목록 보기, 총 ${releaseNums}개`}
              aria-pressed={orderState === "release"}
              className="font-Pretendard text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded px-2"
              onClick={() => setOrderState("release")}
            >
              발매 ({releaseNums})
            </button>
            <span
              className="border-r border-gray-400 h-4 my-auto mx-1"
              aria-hidden="true"
            ></span>
            <button
              type="button"
              aria-label={`참여 곡 목록 보기, 총 ${joinNums}개`}
              aria-pressed={orderState === "join"}
              className="font-Pretendard text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded px-2 mr-1"
              onClick={() => setOrderState("join")}
            >
              참여 ({joinNums})
            </button>
          </nav>
        </div>
        <ol className="grid grid-cols-3 gap-3 md:grid-cols-4 ">
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
                    className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-black rounded"
                  >
                    <img
                      src={releaseAlbums[album][0]}
                      alt={`${album} 앨범 커버`}
                      className="rounded-md"
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
                    className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-black rounded"
                  >
                    <img
                      src={joinAlbums[album][0]}
                      alt={`${album} 앨범 커버`}
                    />
                  </li>
                );
              })}
        </ol>
      </article>
    </section>
  );
};

export default SongsList;
