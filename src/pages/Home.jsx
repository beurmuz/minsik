import React, { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainCard from "../components/MainCard";
import PageContainer from "../components/PageContainer";
import FeaturedYoutube from "../components/FeaturedYoutube";
import MediaRow from "../components/MediaRow";
import MetadataTemplate from "../SEO/MetadataTemplate";
import historyData from "../assets/data/history.json";
import { DataFetchApi } from "../shared/axios";
import { img0, img1, img2 } from "../assets/images/intro/intro";

const FEATURED_YOUTUBE_URL = "https://www.youtube.com/watch?v=Bzp1yVAeZo8";

const Home = () => {
  const [latestSong, setLatestSong] = useState(null);
  const [latestNews, setLatestNews] = useState(null);

  const latestTimeline = useMemo(() => {
    const years = Object.keys(historyData ?? {}).sort((a, b) => b - a);
    const latestYear = years[0];
    const list = historyData?.[latestYear];
    return Array.isArray(list) ? (list[0] ?? null) : null;
  }, []);

  useEffect(() => {
    const getLatestSong = async () => {
      const result = await DataFetchApi.get("songs_data.json")
        .then((res) => res.data)
        .catch((error) => {
          console.log(error);
          return null;
        });
      setLatestSong(result?.[0] ?? null);
    };

    getLatestSong();
  }, []);

  useEffect(() => {
    const getLatestNews = async () => {
      const result = await DataFetchApi.get("news_data.json")
        .then((res) => res.data)
        .catch((error) => {
          console.log(error);
          return null;
        });
      setLatestNews(result?.[0] ?? null);
    };

    getLatestNews();
  }, []);

  return (
    <>
      <MetadataTemplate
        metaTitle={"SIK-K"}
        metaDescription={
          "SIK-K(식케이(=권민식)) 팬이 개발한 SIK-K 사이트 입니다."
        }
        ogUrl={"https://sik-k.netlify.app/"}
        ogTitle={"SIK-K 사이트"}
        ogDescription={"10년차 팬이 만든 SIK-K(식케이) 웹 사이트"}
      />
      <div className="w-full h-full flex flex-col justify-between bg-white overflow-x-hidden">
        <Header />
        <PageContainer>
          <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Latest release */}
            <MainCard title="최신 발매곡">
              {latestSong ? (
                <MediaRow
                  className="mt-4"
                  imageSrc={latestSong.imgSource}
                  imageAlt={`${latestSong.ablum} 앨범 커버`}
                  mediaClassName="border-0 bg-transparent"
                  imageClassName="rounded"
                  imageDecoding="async"
                >
                  <div className="flex flex-col justify-center min-w-0">
                    <p
                      className="font-Pretendard text-base font-bold truncate"
                      title={latestSong.title}
                    >
                      {latestSong.title}
                    </p>
                    <p className="font-Pretendard text-sm text-gray-700">
                      {latestSong.ablum} · {latestSong.release}
                    </p>
                    <p className="font-Pretendard text-sm text-gray-700 mt-1 line-clamp-2">
                      {latestSong.artists}
                    </p>
                  </div>
                </MediaRow>
              ) : (
                <p className="font-Pretendard text-sm text-gray-700 mt-4">
                  불러오는 중…
                </p>
              )}
            </MainCard>

            {/* Latest news */}
            <MainCard title="최신 기사">
              {latestNews ? (
                <div className="mt-4">
                  <a
                    href={latestNews.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 block font-Pretendard text-base font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded line-clamp-2"
                    aria-describedby="클릭 시 기사 원문으로 이동합니다."
                    title={latestNews.title}
                  >
                    {latestNews.title}
                  </a>
                  <p className="font-Pretendard text-sm text-gray-700 mt-2 line-clamp-3">
                    {latestNews.content}
                  </p>
                </div>
              ) : (
                <p className="font-Pretendard text-sm text-gray-700 mt-4">
                  불러오는 중…
                </p>
              )}
            </MainCard>

            {/* Latest timeline */}
            <MainCard title="최신 활동 로그">
              {latestTimeline ? (
                <MediaRow
                  className="mt-4"
                  imageSrc={latestTimeline.imgUrl}
                  imageAlt="최신 활동 로그 이미지"
                  imageDecoding="async"
                  imageFetchPriority="high"
                  fallback={
                    <div className="h-full w-full rounded bg-gray-100 border border-black/10" />
                  }
                  onImageError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                  imageClassName="rounded"
                >
                  <div className="flex flex-col justify-center min-w-0">
                    <p className="font-Pretendard text-sm text-gray-700">
                      {latestTimeline.month}
                    </p>
                    <p
                      className="mt-1 font-Pretendard text-base font-bold text-black line-clamp-2"
                      title={latestTimeline.content}
                    >
                      {latestTimeline.content}
                    </p>
                    {latestTimeline.newsUrl ? (
                      <a
                        href={latestTimeline.newsUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 inline-flex items-center rounded-md font-Pretendard text-sm text-black/70 hover:text-black hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 w-fit"
                      >
                        링크 열기 →
                      </a>
                    ) : null}
                  </div>
                </MediaRow>
              ) : (
                <p className="font-Pretendard text-sm text-gray-700 mt-4">
                  표시할 데이터가 없어요.
                </p>
              )}
            </MainCard>
          </section>

          <section className="mt-6">
            <MainCard title="최신 영상">
              <div className="mt-4">
                <FeaturedYoutube
                  youtubeUrl={FEATURED_YOUTUBE_URL}
                  posterAlt="대표 영상"
                  showControls={true}
                />
                <a
                  href={FEATURED_YOUTUBE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex items-center rounded-md py-1 font-Pretendard text-sm text-black/70 hover:text-black hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  Youtube에서 보기 →
                </a>
              </div>
            </MainCard>
          </section>

          <section className="mt-6">
            <MainCard title="최신 이미지">
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[img0, img1, img2].map((src, idx) => (
                  <div
                    key={idx}
                    className="aspect-[3/4] overflow-hidden rounded-xl border border-black/10 bg-gray-100"
                  >
                    <img
                      src={src}
                      alt={`갤러리 이미지 ${idx + 1}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </MainCard>
          </section>
        </PageContainer>
        <Footer />
      </div>
    </>
  );
};

export default React.memo(Home);
