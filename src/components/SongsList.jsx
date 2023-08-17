import React, { useEffect } from "react";
import { SongItem } from "./SongItem";
import { songsApi } from "../shared/axios";
import { RaceBy } from "@uiball/loaders";
import { songsStore } from "../shared/store";

export const SongsList = (props) => {
  const {
    releaseSongs,
    setsReleaseSongs,
    joinSongs,
    setsJoinSongs,
    songsData,
    setsSongsData,
  } = songsStore((state) => state);

  // 발매 곡 데이터 받아오기
  const getSongsData = async () => {
    const result = await songsApi
      .get("songs_data.json")
      .then((res) => res.data)
      .catch((error) => console.log(error));
    setsSongsData(result);
  };

  // 참여 곡 데이터 받아오기
  const getJoinSongsData = async () => {
    const result = await songsApi
      .get("join_songs_data.json")
      .then((res) => res.data)
      .catch((error) => console.log(error));
    setsSongsData(result);
  };

  useEffect(() => {
    getSongsData();
    getJoinSongsData();
    console.log(songsData);
  }, []);

  return (
    <div class='m-7 p-30 overflow-auto'>
      <ol class=''>
        {songsData ? (
          songsData.map((song) => {
            return (
              <SongItem
                // key={song.songId}
                title={
                  song.title.length < 26
                    ? song.title
                    : song.title.slice(0, 24) + " ···"
                }
                artists={
                  song.artists.length < 36
                    ? song.artists
                    : song.artists.slice(0, 30) + " ···"
                }
              />
            );
          })
        ) : (
          <div class='flex h-full'>
            <span class='m-auto'>
              <RaceBy size={50} lineWeight={3} speed={1.4} color='gray' />
            </span>
          </div>
        )}
      </ol>
    </div>
  );
};
