import React from "react";
import { Header } from "../components/Header";
import { SongsList } from "../components/SongsList";
import { Footer } from "../components/Footer";
import { LatestSong } from "../components/LatestSong";
import { dataStore } from "../shared/store";
import SongChart from "../components/SongChart";
import MetadataTemplate from "../SEO/MetadataTemplate";

export const Songs = (props) => {
  const { releaseList } = dataStore((state) => state);

  return (
    <>
      <MetadataTemplate
        metaUrl={"https://sik-k.netlify.app/songs"}
        metaTitle={"Songs"}
        metaDescription={
          "SIK-K가 최근에 발매한 앨범, 지금까지 발매 및 참여한 노래 정보를 확인할 수 있는 페이지입니다."
        }
      />
      <div className="w-full flex flex-col bg-white">
        <Header changeColor={true} />
        <LatestSong songInfo={releaseList[0]} />
        <SongChart />
        <SongsList />
        <Footer />
      </div>
    </>
  );
};
