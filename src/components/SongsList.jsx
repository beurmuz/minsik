import React, { useEffect, useState } from "react";
import { DataFetchApi } from "../shared/axios";
import { dataStore } from "../shared/store";
import AlbumModal from "./AlbumModal";
import Skeleton from "./Skeleton";

const SongsList = () => {
  const setsReleaseList = dataStore((state) => state.setsReleaseList);
  const setsJoinList = dataStore((state) => state.setsJoinList);
  const releaseNums = dataStore((state) => state.releaseNums);
  const releaseAlbums = dataStore((state) => state.releaseAlbums);
  const joinNums = dataStore((state) => state.joinNums);
  const joinAlbums = dataStore((state) => state.joinAlbums);

  const [clickedAlbum, setClickedAlbum] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [orderState, setOrderState] = useState("release");

  useEffect(() => {
    let isMounted = true;
    const fetchSongs = async () => {
      try {
        const res = await DataFetchApi.get("songs_data.json");
        if (isMounted) setsReleaseList(res.data || []);
      } catch (err) {
        if (isMounted) setsReleaseList([]);
      }
    };

    const fetchJoinSongs = async () => {
      try {
        const res = await DataFetchApi.get("join_songs_data.json");
        if (isMounted) setsJoinList(res.data || []);
      } catch (err) {
        if (isMounted) setsJoinList([]);
      }
    };

    fetchSongs();
    fetchJoinSongs();

    return () => {
      isMounted = false;
    };
  }, [setsReleaseList, setsJoinList]);

  const openModal = (nowInfo) => {
    setClickedAlbum(nowInfo);
    setShowModal(true);
  };

  const currentAlbums = orderState === "release" ? releaseAlbums : joinAlbums;
  const albumKeys = Object.keys(currentAlbums || {});

  return (
    <section className="w-full animate-pageLoadEffect">
      {showModal && (
        <AlbumModal
          albumInfo={clickedAlbum}
          onClose={() => setShowModal(false)}
        />
      )}
      <article className="overflow-auto">
        <div className="w-full mb-3 flex flex-row justify-between">
          <nav className="flex flex-row">
            <button
              type="button"
              aria-label={`발매 곡 목록 보기, 총 ${releaseNums}개`}
              aria-pressed={orderState === "release"}
              className="font-Pretendard text-sub-color hover:text-main-color focus:outline-none focus:ring-2 focus:ring-main-color focus:ring-offset-2 rounded"
              onClick={() => setOrderState("release")}
            >
              발매 ({releaseNums})
            </button>
            <span
              className="border-r border-gray-400 h-4 my-auto mx-2"
              aria-hidden="true"
            />
            <button
              type="button"
              aria-label={`참여 곡 목록 보기, 총 ${joinNums}개`}
              aria-pressed={orderState === "join"}
              className="font-Pretendard text-sub-color hover:text-main-color focus:outline-none focus:ring-2 focus:ring-main-color focus:ring-offset-2 rounded"
              onClick={() => setOrderState("join")}
            >
              참여 ({joinNums})
            </button>
          </nav>
        </div>

        <ol className="grid grid-cols-3 gap-3 md:grid-cols-4 lg:grid-cols-5">
          {albumKeys.length === 0
            ? Array.from({ length: 10 }).map((_, idx) => (
                <li key={`skel-album-${idx}`}>
                  <Skeleton className="w-full aspect-square rounded" />
                </li>
              ))
            : albumKeys.map((album) => {
                const targetAlbum = currentAlbums[album];
                return (
                  <li
                    key={album}
                    role="button"
                    tabIndex={0}
                    aria-label={`${album} 앨범 상세 정보 보기`}
                    onClick={() =>
                      openModal([
                        album,
                        targetAlbum[0],
                        targetAlbum[1],
                        orderState === "release" ? "R" : "J",
                      ])
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openModal([
                          album,
                          targetAlbum[0],
                          targetAlbum[1],
                          orderState === "release" ? "R" : "J",
                        ]);
                      }
                    }}
                    className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-main-color rounded"
                  >
                    <img
                      src={targetAlbum[0]}
                      alt={`${album} 앨범 커버`}
                      loading="lazy"
                    />
                  </li>
                );
              })}
        </ol>
        <p className="font-Pretendard text-sm py-5 text-sub-color">
          * 앨범은 최신순으로 정렬되어 있습니다. <br />* 매주 수요일 오전 9시마다 정보가 업데이트됩니다.
        </p>
      </article>
    </section>
  );
};

export default React.memo(SongsList);