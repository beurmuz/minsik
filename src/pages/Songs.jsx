import React from "react";
import { Header } from "../components/Header";
import { SongsList } from "../components/SongsList";
import { Footer } from "../components/Footer";

export const Songs = (props) => {
  return (
    <div class='w-full h-full flex flex-col'>
      <Header />
      <SongsList />
      <Footer />
    </div>
  );
};
