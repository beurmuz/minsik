import React from "react";
import Header from "../components/Header";
import NewsList from "../components/NewsList";
import Footer from "../components/Footer";
import FestivalsList from "../components/FestivalsList";
import MetadataTemplate from "../SEO/MetadataTemplate";

const News = (props) => {
  console.log("🥶 News 컴포넌트 호출~!!");
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
      <div className="w-full flex flex-col bg-white">
        <Header changeColor={true} />
        <section className="m-10">
          <article className="flex flex-row justify-between pt-1 px-1">
            <h2 className="font-Pretendard text-main-blue/80 text-2xl font-bold">
              최신 뉴스
            </h2>
            <p className="font-Pretendard text-gray-500 text-sm my-auto">
              Update: 매주 수요일
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
