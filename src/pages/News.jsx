import React from "react";
import { Header } from "../components/Header";
import { NewsList } from "../components/NewsList";
import { Footer } from "../components/Footer";
import FestivalsList from "../components/FestivalsList";
import MetadataTemplate from "../SEO/MetadataTemplate";

export const News = (props) => {
  return (
    <>
      <MetadataTemplate
        metaUrl={"https://sik-k.netlify.app/news"}
        metaTitle={"News"}
        metaDescription={
          "SIK-K에 대한 최신 뉴스, 최신 공연 정보에 대해 확인할 수 있는 페이지입니다."
        }
      />
      <div className="w-full flex flex-col bg-white">
        <Header changeColor={true} />
        <div className="m-10">
          <div className="flex flex-row justify-between pt-1 px-1">
            <p className="font-Pretendard text-main-blue/80 text-2xl font-bold">
              최신 뉴스
            </p>
            <p className="font-Pretendard text-gray-400 text-sm my-auto">
              Updated: 매주 수요일
            </p>
          </div>
          <article>
            <NewsList />
          </article>
        </div>

        {/* 페스티벌 정보 */}
        <FestivalsList />
        <Footer />
      </div>
    </>
  );
};
