import React from "react";
import { BsArrowDown } from "react-icons/bs";
import faceImg from "../assets/images/minsik.webp";
import { Header } from "../components/Header";
import PageName from "../components/PageName";
import { ImgBox } from "../components/ImgBox";
import { Toolbar } from "../components/Toolbar";
import { HistoryBox } from "../components/HistoryBox";
import MetadataTemplate from "../SEO/MetadataTemplate";

export const Intro = (props) => {
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
      <div className=" bg-white">
        {/* info */}
        <section className="w-screen h-screen flex flex-col text-center ">
          <Header changeColor={true} />
          <div className="flex flex-col m-auto ">
            <div className="m-auto w-72">
              <img src={faceImg} alt="Sik-K face" />
            </div>
            <h2 className="font-Pretendard text-3xl font-bold mt-7 mb-2">
              권민식 (SIK-K)
            </h2>
            <ol>
              <li className="font-Pretendard text-lg">알앤비/어반, 랩/힙합</li>
              <li className="font-Pretendard text-lg">(1994.02.26)</li>
            </ol>

            <a
              href="https://en.wikipedia.org/wiki/Sik-K"
              target="_blank"
              rel="noreferrer"
              className="font-Pretendard font-normal text-gray-500 pt-5"
            >
              * more info ...
            </a>
            <div className="text-center my-10 mx-auto text-main-blue-light animate-bounce">
              <BsArrowDown size="30" />
            </div>
          </div>
        </section>

        {/* 바이오그래피 */}
        <section className="w-screen h-screen flex flex-col justify-center">
          <PageName>Biography</PageName>
          <article className="px-10">
            <p className="font-Pretendard text-base font-base">
              <span className="font-NotoSerif">KC </span> 레이블의 대표{" "}
              <span className="font-NotoSerif">SIK-K</span>는 꾸준하게 서울을
              중심으로 새로운 사운드를 전 세계에 선사하고 있는 아티스트이다.
              <br />
              <br />
              쇼미더머니 출연, 박재범과 함께한 하이어뮤직의 컴필레이션 참여 등
              레이블의 전성기를 견인하며, 한국 힙합씬을 전 세계에 알려온
              식케이는 2023년 새로운 둥지를 스스로 마련하여 다양한 활동을 할
              준비를 마쳤다.
              <br />
              <br />
              평단과 대중의 호평을 동시에 얻은 두 번째 정규작{" "}
              <span className="font-NotoSerif">[HEADLINER]</span> 이후 군입대
              기간 공백 후, <span className="font-NotoSerif">[POP A LOT]</span>{" "}
              월드 투어를 성공적으로 진행하며 추후 앨범 활동에 대한 기대감을
              끌어올리고 있다. <br />
              <br />
              항상 새로운 플로우와 사운드의 기준을 제시해 온 그가 어떤 모습의
              트랙과 앨범들을 선사할지 귀추가 주목된다.
            </p>
            <p className="py-5 ">
              <a
                href="https://vibe.naver.com/artist/331653"
                target="_blank"
                rel="noreferrer"
                className="font-Pretendard text-gray-400 text-sm"
              >
                [출처] 네이버 바이브
              </a>
            </p>
          </article>
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
      </div>
    </>
  );
};
