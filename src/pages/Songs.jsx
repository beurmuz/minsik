import React from "react";
import { Header } from "../components/Header";
import { SongsList } from "../components/SongsList";
import { Footer } from "../components/Footer";
import { LatestSong } from "../components/LatestSong";
import { dataStore } from "../shared/store";
import SongChart from "../components/SongChart";

export const Songs = (props) => {
  const { releaseList } = dataStore((state) => state);

  return (
    <div className="w-full flex flex-col bg-white">
      <Header changeColor={true} />
      <LatestSong songInfo={releaseList[0]} />
      <SongChart />
      <SongsList />
      <Footer />
    </div>
  );
};
