import React, { useEffect, useState } from "react";
import { SongItem } from "./SongItem";
import { songsApi } from "../shared/axios";
// import songData from "../crawlingData/songs_data.json";

export const SongsList = (props) => {
  const [songsData, setSongsData] = useState([]);

  const getSongsData = async () => {
    const result = await songsApi
      .get("songs_data.json")
      .then((res) => res.data)
      .catch((error) => console.log(error));
    setSongsData(result);
  };

  useEffect(() => {
    getSongsData();
  }, []);

  return (
    <div class='m-7 p-30 overflow-auto'>
      <ol class=''>
        {songsData &&
          songsData.map((song) => {
            return (
              <SongItem
                key={song.songId}
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
          })}
      </ol>
    </div>
  );
};
