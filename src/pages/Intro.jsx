import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import faceImg from "../assets/images/newMinsik.webp";
import Header from "../components/Header";
import HistoryBox from "../components/HistoryBox";
import MainCard from "../components/MainCard";
import YouTubeVideo from "../components/YouTubeVideo";
import MetadataTemplate from "../SEO/MetadataTemplate";
import Footer from "../components/Footer";
import PageContainer from "../components/PageContainer";
import { dday, convertDday } from "../utils/date";

const Intro = () => {
  // 클라이언트에서만 날짜 계산 (hydration 오류 방지)
  const [debutDays, setDebutDays] = useState(0);
  const [dateInfo, setDateInfo] = useState({ years: 0, months: 0, days: 0 });

  useEffect(() => {
    // 클라이언트에서만 실행되어 hydration 오류 방지
    const days = dday();
    const info = convertDday(days);
    setDebutDays(days);
    setDateInfo(info);
  }, []);

  const { years, months, days } = dateInfo;

  return (
    <>
      <MetadataTemplate
        metaTitle={"SIK-K | Introduce"}
        metaDescription={
          "SIK-K의 기본 정보, 바이오그래피, 활동 로그에 대해 알 수 있는 사이트입니다."
        }
        ogUrl={"https://sik-k.netlify.app/intro"}
        ogTitle={"SIK-K가 누구?"}
        ogDescription={"SIK-K에 대해 알아보기"}
      />
      <Helmet>
        <link rel="preload" as="image" href={faceImg} />
      </Helmet>
      <div className="w-full flex flex-col bg-white">
        <Header changeColor={true} />

        <PageContainer>
          {/* Profile */}
          <section>
            <MainCard title="Profile" variant="section">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr]">
                <div className="w-full max-w-[220px] mx-auto lg:mx-0">
                  <img
                    src={faceImg}
                    alt="식케이 프로필 사진"
                    fetchpriority="high"
                    decoding="async"
                    width="220"
                    height="220"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-Pretendard text-2xl font-bold text-black">
                    권민식 (SIK-K)
                  </p>
                  <p className="font-Pretendard text-sm text-main-color mt-2">
                    2015.08.07 데뷔 | D+{debutDays} ({years}년 {months}개월{" "}
                    {days}
                    일)
                  </p>
                  <p className="font-Pretendard text-sm leading-6 text-sub-color mt-3">
                    KC 레이블의 설립자이자 대표로 서울을 중심으로 새로운
                    사운드를 꾸준히 선보여온 아티스트. 군 복무 이후 [POP A LOT]
                    월드 투어를 성공적으로 진행하며 활동 반경을 넓혀왔다. 이후
                    앨범과 무대에서 어떤 새로운 사운드를 보여줄지 계속 주목받고
                    있다.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href="https://en.wikipedia.org/wiki/Sik-K"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 font-Pretendard text-xs text-black/70 hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                      aria-describedby="클릭 시 위키피디아로 연결됩니다."
                    >
                      Wikipedia →
                    </a>
                    <a
                      href="https://vibe.naver.com/artist/331653"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 font-Pretendard text-xs text-black/70 hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                      aria-describedby="클릭 시 네이버 바이브로 연동됩니다."
                    >
                      VIBE →
                    </a>
                  </div>
                </div>
              </div>
            </MainCard>
          </section>

          {/* YouTube Video */}
          <YouTubeVideo videoId="oCvA-i9OTyg" title="Music Video" />

          {/* Timeline */}
          <section className="mt-12">
            <MainCard title="Timeline" variant="section">
              <HistoryBox />
            </MainCard>
          </section>
        </PageContainer>

        <Footer changeColor={true} />
      </div>
    </>
  );
};

export default React.memo(Intro);
