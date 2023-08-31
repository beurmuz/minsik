import React from "react";
import { Header } from "../components/Header";
import { NewsList } from "../components/NewsList";
import { Footer } from "../components/Footer";
import FestivalsList from "../components/FestivalsList";

export const News = (props) => {
  return (
    <div className="w-full flex flex-col bg-white">
      <Header changeColor={true} />
      <div className="m-10">
        <div className="flex flex-row justify-between pt-1 px-1">
          <p className="font-Pretendard text-main-blue/80 text-2xl font-bold">
            최신 뉴스
          </p>
          <p className="font-Pretendard text-gray-400 text-sm my-auto">
            업데이트: 2023.08.30
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
  );
};
