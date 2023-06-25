import React from "react";
import { SongItem } from "./SongItem";
import songData from "../crawlingData/songs_data.json";

export const SongsList = (props) => {
  return (
    <div class='m-7 p-30 overflow-auto'>
      <ol class=''>
        {songData.map((song) => {
          return (
            <SongItem
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
