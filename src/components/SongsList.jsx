import React, { useEffect, useState } from "react";
import { SongItem } from "./SongItem";
import { songsApi } from "../shared/axios";
// import { RaceBy } from "@uiball/loaders";
import { dataStore } from "../shared/store";

export const SongsList = (props) => {
  const { releaseSongs, setsReleaseSongs, joinSongs, setsJoinSongs } =
    dataStore((state) => state);

  const [orderState, setOrderState] = useState("release");

  // 발매 곡 데이터 받아오기
  const getSongsData = async () => {
    const result = await songsApi
      .get("songs_data.json")
      .then((res) => res.data)
      .catch((error) => console.log(error));
    setsReleaseSongs(result);
  };

  // 참여 곡 데이터 받아오기
  const getJoinSongsData = async () => {
    const result = await songsApi
      .get("join_songs_data.json")
      .then((res) => res.data)
      .catch((error) => console.log(error));
    setsJoinSongs(result);
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
    <div class="m-7 p-30 overflow-auto">
      <div class="w-full mb-3 flex flex-row justify-end">
        <button
          class="mx-3 font-NotoKo text-gray-500 hover:text-main-blue"
          onClick={(e) => setOrderState("release")}
        >
          발매 ({releaseSongs.length})
        </button>
        <span class="border-r border-gray-500 h-4 my-auto"></span>
        <button
          class="mx-3 font-NotoKo text-gray-500 hover:text-main-blue"
          onClick={() => setOrderState("join")}
        >
          참여 ({joinSongs.length})
        </button>
      </div>
      <ol class="">
        {
          releaseSongs && orderState === "release"
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
              })
          // <div class="flex h-full">
          //   <span class="m-auto">
          //     <RaceBy size={50} lineWeight={3} speed={1.4} color="gray" />
          //   </span>
          // </div>
        }
      </ol>
    </div>
  );
};
