import React from "react";
import { Header } from "../components/Header";
import { SongsList } from "../components/SongsList";
import { Footer } from "../components/Footer";
// import { MusicChart } from "../components/MusicChart";

export const Songs = (props) => {
  return (
    <div class='w-full flex flex-col bg-white'>
      <Header changeColor={true} />
      {/* <MusicChart /> */}
      <SongsList />
      <Footer />
    </div>
  );
};
