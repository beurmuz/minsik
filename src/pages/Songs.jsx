import React from "react";
import Header from "../components/Header";
import SongsList from "../components/SongsList";
import Footer from "../components/Footer";
import LatestSong from "../components/LatestSong";
import { dataStore } from "../shared/store";
import SongChart from "../components/SongChart";
import MetadataTemplate from "../SEO/MetadataTemplate";

const Songs = (props) => {
  const { releaseList } = dataStore((state) => state);

  console.log("🎤 Songs 컴포넌트 호출");

  return (
    <>
      <MetadataTemplate
        metaTitle={"SIK-K | Song"}
        metaDescription={
          "SIK-K의 최근 발매 앨범, 지금까지 발매 및 참여한 노래 정보를 확인할 수 있는 페이지입니다."
        }
        ogUrl={"https://sik-k.netlify.app/songs"}
        ogTitle={"SIK-K 노래 구경하기"}
        ogDescription={"식케이의 최신 앨범, 노래 정보 확인하기"}
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

export default Songs;
