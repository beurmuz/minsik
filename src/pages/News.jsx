import React from "react";
import Header from "../components/Header";
import NewsList from "../components/NewsList";
import Footer from "../components/Footer";
import FestivalsList from "../components/FestivalsList";
import MetadataTemplate from "../SEO/MetadataTemplate";
import GotoTopButton from "../components/GotoTopButton";

const News = (props) => {
  return (
    <>
      <MetadataTemplate
        metaTitle={"SIK-K | News"}
        metaDescription={
          "SIK-K에 대한 최신 뉴스, 최신 공연 정보에 대해 확인할 수 있는 사이트입니다."
        }
        ogUrl={"https://sik-k.netlify.app/news"}
        ogTitle={"요즘 SIK-K는?"}
        ogDescription={"식케이의 최신 뉴스, 공연 정보 확인하기"}
      />
      <div className="w-full flex flex-col bg-white px-52 max-[900px]:px-32 max-[800px]:px-0">
        <Header changeColor={true} />
        <GotoTopButton />
        <section className="m-10 animate-pageLoadEffect">
          <article className="flex flex-row justify-between pt-1 px-1 max-[350px]:flex-col">
            <h2 className="font-Pretendard text-main-blue/80 text-2xl font-bold">
              최신 뉴스
            </h2>
            <p className="font-Pretendard text-gray-500 text-sm my-auto">
              update: 매주 수요일 9시
            </p>
          </article>
          <article>
            <NewsList />
          </article>
        </section>

        {/* 페스티벌 정보 */}
        <FestivalsList />
        <Footer />
      </div>
    </>
  );
};

export default React.memo(News);
