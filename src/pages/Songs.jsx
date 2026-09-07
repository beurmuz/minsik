import React from "react";
import SongsList from "../components/SongsList";
import Footer from "../components/Footer";
import { dataStore } from "../shared/store";
import SongChart from "../components/SongChart";
import MetadataTemplate from "../SEO/MetadataTemplate";
import PageContainer from "../components/PageContainer";
import MainCard from "../components/MainCard";
import MediaRow from "../components/MediaRow";
import Skeleton from "../components/Skeleton";

const Songs = () => {
  const releaseList = dataStore((state) => state.releaseList);
  const latestSong = releaseList?.[0];

  return (
    <>
      <MetadataTemplate
        metaTitle="SIK-K | Song"
        metaDescription="SIK-K의 최근 발매 앨범, 지금까지 발매 및 참여한 노래 정보를 확인할 수 있는 페이지입니다."
        ogUrl="https://sik-k.netlify.app/songs"
        ogTitle="SIK-K 노래 구경하기"
        ogDescription="식케이의 최신 앨범, 노래 정보 확인하기"
      />
      <PageContainer>
        <section>
          <MainCard
            title="최신 발매곡"
            variant="section"
            className="flex-1 flex flex-col"
          >
            {latestSong?.title ? (
              <MediaRow
                className="mt-4"
                imageSrc={latestSong.imgSource}
                imageAlt={`${latestSong.album || latestSong.ablum || "앨범"} 커버`}
                fallback={<div className="h-full w-full bg-gray-200 rounded" />}
                imageClassName="rounded"
              >
                <div className="flex flex-col justify-center min-w-0">
                  <p
                    className="font-Pretendard text-xl font-bold text-black truncate"
                    title={latestSong.title}
                  >
                    {latestSong.title}
                  </p>
                  <p
                    className="font-Pretendard text-sm text-sub-color mt-1 truncate"
                    title={latestSong.artists}
                  >
                    {latestSong.artists}
                  </p>
                  {latestSong.songId && (
                    <a
                      href={`https://www.melon.com/song/detail.htm?songId=${latestSong.songId}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-block font-Pretendard text-sm text-black/70 hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded py-1 w-fit"
                      aria-label={`${latestSong.title} 멜론 페이지에서 듣기 (새 창 열림)`}
                    >
                      멜론에서 듣기 →
                    </a>
                  )}
                </div>
              </MediaRow>
            ) : (
              <div className="mt-4 flex gap-4 pr-4">
                <Skeleton className="w-20 h-20 rounded flex-shrink-0" />
                <div className="flex flex-col justify-center min-w-0 flex-1">
                  <Skeleton className="w-1/2 h-6" />
                  <Skeleton className="w-1/3 h-5 mt-2" />
                  <Skeleton className="w-24 h-8 mt-2" />
                </div>
              </div>
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
    </>
  );
};

export default React.memo(Songs);