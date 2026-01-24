import React from "react";
import Header from "../components/Header";
import NewsList from "../components/NewsList";
import Footer from "../components/Footer";
import FestivalsList from "../components/FestivalsList";
import MainCard from "../components/MainCard";
import PageContainer from "../components/PageContainer";
import MetadataTemplate from "../SEO/MetadataTemplate";
import GotoTopButton from "../components/GotoTopButton";

const News = () => {
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
        <GotoTopButton />
        <PageContainer>
          <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <MainCard title="최신 뉴스">
                <NewsList />
              </MainCard>
            </div>
            <div className="lg:col-span-1">
              <MainCard title="공연 정보">
                <div className="mt-4">
                  <FestivalsList pastLimit={3} />
                </div>
              </MainCard>
            </div>
          </section>
        </PageContainer>

        <Footer />
      </div>
    </>
  );
};

export default React.memo(News);
