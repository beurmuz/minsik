import React from "react";
import faceImg from "../assets/images/minsik.webp";
import Header from "../components/Header";
import PageName from "../components/PageName";
import ImgBox from "../components/ImgBox";
import Toolbar from "../components/Toolbar";
import HistoryBox from "../components/HistoryBox";
import MetadataTemplate from "../SEO/MetadataTemplate";
import Footer from "../components/Footer";
import mouseIcon from "../assets/images/icons/mouseIcon.webp";
import GotoTopButton from "../components/GotoTopButton";

const Intro = (props) => {
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
      {/* info */}
      <div className="w-screen h-screen flex flex-col text-center">
        <Header changeColor={true} />
        <GotoTopButton />
        <section className="flex flex-col m-auto animate-pageLoadEffect">
          <div className="m-auto w-64 max-[380px]:w-48">
            <img src={faceImg} alt="식케이 프로필 사진" />
          </div>
          <ol>
            <li className="font-Pretendard text-3xl font-bold mt-7 mb-2 max-[380px]:text-2xl">
              권민식 (SIK-K)
            </li>
            <li className="font-Pretendard text-lg">알앤비/어반, 랩/힙합</li>
            <li className="font-Pretendard text-lg">(1994.02.26)</li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Sik-K"
                target="_blank"
                rel="noreferrer"
                className="font-Pretendard font-normal text-gray-500"
                aria-describedby="클릭 시 위키피디아로 연결됩니다."
              >
                * more info ...
              </a>
            </li>
          </ol>
          <div className="text-center mt-20 mx-auto text-main-blue-light">
            <img
              src={mouseIcon}
              className="w-[30px] h-[30px] m-auto animate-bounce"
              alt="arrow Icon"
            />
            <p className="font-Pretendard font-xs py-2">scroll down</p>
          </div>
        </section>
      </div>

      {/* 바이오그래피 */}
      <section className="w-screen h-screen flex flex-col justify-center">
        <PageName>Biography</PageName>
        <div className="px-10">
          <article className="font-Pretendard text-base font-base max-[380px]:text-sm">
            KC 레이블의 대표 SIK-K는 꾸준하게 서울을 중심으로 새로운 사운드를 전
            세계에 선사하고 있는 아티스트이다.
            <br />
            <br />
            쇼미더머니 출연, 박재범과 함께한 하이어뮤직의 컴필레이션 참여 등
            레이블의 전성기를 견인하며, 한국 힙합씬을 전 세계에 알려온 식케이는
            2023년 새로운 둥지를 스스로 마련하여 다양한 활동을 할 준비를 마쳤다.
            <br />
            <br />
            평단과 대중의 호평을 동시에 얻은 두 번째 정규작 [HEADLINER] 이후
            군입대 기간 공백 후, [POP A LOT] 월드 투어를 성공적으로 진행하며
            추후 앨범 활동에 대한 기대감을 끌어올리고 있다. <br />
            <br />
            항상 새로운 플로우와 사운드의 기준을 제시해 온 그가 어떤 모습의
            트랙과 앨범들을 선사할지 귀추가 주목된다.
            <br />
            <br />
            <a
              href="https://vibe.naver.com/artist/331653"
              target="_blank"
              rel="noreferrer"
              className="font-Pretendard text-gray-500 text-sm"
              aria-describedby="클릭 시 네이버 바이브로 연동됩니다."
            >
              [출처] 네이버 바이브
            </a>
          </article>
        </div>
      </section>

      {/* 사진 모음집 */}
      <section className="w-screen h-screen flex flex-col justify-center">
        <Toolbar />
        <ImgBox />
        <Toolbar />
      </section>

      {/* Timeline */}
      <section className="w-screen flex flex-col">
        <PageName>Timeline</PageName>
        <HistoryBox />
      </section>
      <section className="h-24">
        <Footer />
      </section>
    </>
  );
};

export default React.memo(Intro);
