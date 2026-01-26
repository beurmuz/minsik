import React from "react";
import Header from "../components/Header";
import SongsList from "../components/SongsList";
import Footer from "../components/Footer";
import { dataStore } from "../shared/store";
import SongChart from "../components/SongChart";
import MetadataTemplate from "../SEO/MetadataTemplate";
import PageContainer from "../components/PageContainer";
import MainCard from "../components/MainCard";
import MediaRow from "../components/MediaRow";

const Songs = (props) => {
  const { releaseList } = dataStore((state) => state);

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
        <PageContainer>
          <section>
            <MainCard
              title="최신 발매곡"
              variant="section"
              className="flex-1 flex flex-col"
            >
              {releaseList?.[0]?.title ? (
                <MediaRow
                  className="mt-4"
                  imageSrc={releaseList?.[0]?.imgSource}
                  imageAlt={`${releaseList[0].ablum} 앨범 커버`}
                  fallback={
                    <div className="h-full w-full bg-gray-200 rounded" />
                  }
                  imageClassName="rounded"
                >
                  <div className="flex flex-col justify-center min-w-0">
                    <p
                      className="font-Pretendard text-xl font-bold text-black truncate"
                      title={releaseList[0].title}
                    >
                      {releaseList[0].title}
                    </p>
                    <p
                      className="font-Pretendard text-sm text-sub-color mt-1 truncate"
                      title={releaseList[0].artists}
                    >
                      {releaseList[0].artists}
                    </p>
                    {releaseList[0].songId ? (
                      <a
                        href={`https://www.melon.com/song/detail.htm?songId=${releaseList[0].songId}`}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-block font-Pretendard text-sm text-black/70 hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded py-1 w-fit"
                        aria-describedby="클릭 시 멜론 페이지로 연결됩니다."
                      >
                        멜론에서 듣기 →
                      </a>
                    ) : null}
                  </div>
                </MediaRow>
              ) : (
                <p className="font-Pretendard text-sm text-sub-color mt-4">
                  불러오는 중…
                </p>
              )}
            </MainCard>
          </section>
          <section className="mt-12">
            <MainCard title="연도별 활동 통계" variant="section">
              <SongChart />
            </MainCard>
          </section>
          <section className="mt-12">
            <MainCard title="전체곡" variant="section">
              <SongsList />
            </MainCard>
          </section>
        </PageContainer>
        <Footer changeColor={true} />
      </div>
    </>
  );
};

export default React.memo(Songs);
