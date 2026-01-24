import React from "react";
import Header from "../components/Header";
import SongsList from "../components/SongsList";
import Footer from "../components/Footer";
import MainCard from "../components/MainCard";
import PageContainer from "../components/PageContainer";
import { dataStore } from "../shared/store";
import SongChart from "../components/SongChart";
import MetadataTemplate from "../SEO/MetadataTemplate";
import GotoTopButton from "../components/GotoTopButton";
import MediaRow from "../components/MediaRow";

const Songs = () => {
  const { releaseList, joinList } = dataStore((state) => state);

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
        <Header />
        <GotoTopButton />
        <PageContainer>
          <header className="mb-8">
            <p className="font-Pretendard text-base leading-7 text-gray-700">
              최신 발매/피처링 곡, 연도별 활동 내역, 전체 디스코그래피를 확인할
              수 있어요.
              <br />
              전체 앨범은 최신순이며 매주 수요일 오전 9시에 업데이트돼요.
            </p>
          </header>

          <section className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
            <div className="flex flex-col gap-6 lg:col-span-1 lg:h-full">
              <MainCard title="최신 발매곡" className="flex-1 flex flex-col">
                {releaseList?.[0]?.title ? (
                  <MediaRow
                    className="mt-4"
                    imageSrc={releaseList?.[0]?.imgSource}
                    imageAlt={`${releaseList[0].ablum} 앨범 커버`}
                    fallback={<div className="h-full w-full bg-gray-200 rounded" />}
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
                        className="font-Pretendard text-sm text-gray-700 mt-1 truncate"
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
                  <p className="font-Pretendard text-sm text-gray-700 mt-4">
                    불러오는 중…
                  </p>
                )}
              </MainCard>

              <MainCard title="최신 피처링곡" className="flex-1 flex flex-col">
                {joinList?.[0]?.title ? (
                  <MediaRow
                    className="mt-4"
                    imageSrc={joinList?.[0]?.imgSource}
                    imageAlt={`${joinList[0].ablum} 앨범 커버`}
                    fallback={<div className="h-full w-full bg-gray-200 rounded" />}
                    imageClassName="rounded"
                  >
                    <div className="flex flex-col justify-center min-w-0">
                      <p
                        className="font-Pretendard text-xl font-bold text-black truncate"
                        title={joinList[0].title}
                      >
                        {joinList[0].title}
                      </p>
                      <p
                        className="font-Pretendard text-sm text-gray-700 mt-1 truncate"
                        title={joinList[0].artists}
                      >
                        {joinList[0].artists}
                      </p>
                      {joinList[0].songId ? (
                        <a
                          href={`https://www.melon.com/song/detail.htm?songId=${joinList[0].songId}`}
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
                  <p className="font-Pretendard text-sm text-gray-700 mt-4">
                    불러오는 중…
                  </p>
                )}
              </MainCard>
            </div>

            <div className="lg:col-span-2 lg:h-full">
              <MainCard title="연도별 활동 내역" className="h-full">
                <SongChart />
              </MainCard>
            </div>
          </section>

          <section className="mt-10">
            <MainCard>
              <SongsList />
            </MainCard>
          </section>
        </PageContainer>
        <Footer />
      </div>
    </>
  );
};

export default React.memo(Songs);
