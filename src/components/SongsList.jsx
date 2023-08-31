import React, { useEffect, useState } from "react";
import { songsApi } from "../shared/axios";
import { dataStore } from "../shared/store";
import { LatestSong } from "./LatestSong";

export const SongsList = (props) => {
  const {
    releaseList,
    releaseNums,
    setsReleaseList,
    releaseAlbums,
    joinNums,
    joinAlbums,
    setsJoinList,
  } = dataStore((state) => state);

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

  return (
    <div className="m-7 p-30 ">
      <LatestSong songInfo={releaseList[0]} />

      {/* 전체곡 리스트 */}
      <div className="overflow-auto p-3">
        <div className="w-full mb-3 flex flex-row justify-between">
          <p className="font-Pretendard text-main-blue/80 text-xl font-bold">
            전체곡
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
            ? Object.keys(releaseAlbums).map((key, idx) => {
                return (
                  <div key={idx}>
                    <img src={releaseAlbums[key][0]} alt="앨범 이미지" />
                  </div>
                );
              })
            : Object.keys(joinAlbums).map((key, idx) => {
                return (
                  <div key={idx}>
                    <img src={joinAlbums[key][0]} alt="앨범 이미지" />
                  </div>
                );
              })}
          {/* {releaseSongs && orderState === "release"
            ? releaseSongs.map((song) => {
                return (
                  <SongItem
                    key={song.songId}
                    title={song.title}
                    artists={song.artists}
                    imgSrc={song.imgSource}
                  />
                );
              })
            : joinSongs.map((song) => {
                return (
                  <SongItem
                    key={song.songId}
                    title={song.title}
                    artists={song.artists}
                    imgSrc={song.imgSource}
                  />
                );
              })} */}
        </ol>
        <p className="font-Pretendard text-sm py-5 text-gray-400">
          * 앨범은 최신순으로 정렬되어 있습니다.
        </p>
      </div>
    </div>
  );
};
