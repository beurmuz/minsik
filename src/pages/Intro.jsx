import React, { useEffect, useState } from "react";
import { BsArrowDown } from "react-icons/bs";
import { TbPointFilled } from "react-icons/tb";
import faceImg from "../assets/images/minsik.png";
import { DescriptionBox } from "../components/DescriptionBox";
import { Header } from "../components/Header";
import { festivalApi } from "../shared/axios";

export const Intro = (props) => {
  const [festivals, setFestivals] = useState([]);

  const getFestivalData = async () => {
    const result = await festivalApi
      .get("festival_data.json")
      .then((res) => res.data)
      .catch((error) => console.log(error));
    setFestivals(result);
  };

  useEffect(() => {
    getFestivalData();
    // eslint-disable-next-line
  }, []);

  return (
    <div class=" bg-white">
      {/* info */}
      <section class="w-screen h-screen flex flex-col text-center ">
        <Header changeColor={true} />
        <div class="flex flex-col m-auto ">
          <div class="m-auto w-72">
            <img src={faceImg} alt="Sik-K face" />
          </div>
          <h2 class="font-NotoSerif text-main-blue text-4xl font-bold mt-7 mb-2">
            SIK-K
          </h2>
          <p class="font-NotoSerif text-lg">(1994.02.26)</p>
          <p class="font-NotoSerif text-xl mb-10">Korean Rapper</p>
          <div class="text-center my-10 mx-auto text-main-blue-light animate-bounce">
            <BsArrowDown size="30" />
          </div>
        </div>
      </section>

      {/* Biography */}
      <section class="w-screen h-screen flex flex-col justify-center">
        <h3 class="font-NotoSerif text-main-blue/80 text-4xl font-bold p-10">
          Biography
        </h3>
        <article class="px-10">
          <p class="font-NotoKo text-base font-base">
            <span class="font-NotoSerif">KC</span> 레이블의 대표{" "}
            <span class="font-NotoSerif">SIK-K</span>는 꾸준하게 서울을 중심으로
            새로운 사운드를 전 세계에 선사하고 있는 아티스트이다.
            <br />
            <br />
            쇼미더머니 출연, 박재범과 함께한 하이어뮤직의 컴필레이션 참여 등
            레이블의 전성기를 견인하며, 한국 힙합씬을 전 세계에 알려온 식케이는
            2023년 새로운 둥지를 스스로 마련하여 다양한 활동을 할 준비를 마쳤다.
            <br />
            <br />
            평단과 대중의 호평을 동시에 얻은 두 번째 정규작{" "}
            <span class="font-NotoSerif">[HEADLINER]</span> 이후 군입대 기간
            공백 후, <span class="font-NotoSerif">[POP A LOT]</span> 월드 투어를
            성공적으로 진행하며 추후 앨범 활동에 대한 기대감을 끌어올리고 있다.{" "}
            <br />
            <br />
            항상 새로운 플로우와 사운드의 기준을 제시해 온 그가 어떤 모습의
            트랙과 앨범들을 선사할지 귀추가 주목된다.
          </p>
          <p class="py-5 ">
            <a
              href="https://vibe.naver.com/artist/331653"
              target="_blank"
              rel="noreferrer"
              class="font-NotoSerif text-gray-300 text-xs"
            >
              [Sources] Naver Vibe Biography
            </a>
          </p>
        </article>
      </section>

      {/* 상위 10개의 공연 정보 */}
      <section className="w-screen h-screen flex flex-col justify-center">
        <h3 class="font-NotoSerif text-main-blue/80 text-4xl font-bold p-10">
          List of recent 10 concerts
        </h3>
        <div className="flex flex-row overflow-x-auto px-10 pb-5">
          {festivals &&
            festivals.map((festival) => {
              return (
                <div className="w-full">
                  <div className="w-72">
                    <img
                      className="max-width: 100% height: auto"
                      src={festival.imgUrl}
                      alt={festival.title}
                    />
                  </div>
                  <article className="py-5">
                    <p className="text-7xl text-main-blue/30 font-extrabold py-1">
                      {festival.id + 1 < 10
                        ? "0" + (festival.id + 1)
                        : festival.id + 1}
                    </p>
                    <p className="text-main-blue-light/70 text-xl font-bold">
                      <a href={festival.link}>{festival.title}</a>
                    </p>
                    <p className="text-gray-500 font-semibold">
                      {festival.date}
                    </p>
                  </article>
                </div>
              );
            })}
        </div>
        <p className="px-10 py-5 text-gray-400">
          * 공연명을 누르면 상세페이지로 이동합니다.
        </p>
      </section>

      {/* Timeline */}
      <section class="w-screen flex flex-col">
        <h3 class="font-NotoSerif text-main-blue/80 text-4xl font-bold px-10 py-7">
          Timeline
        </h3>
        <div class="flex flex-row">
          <article class="w-12 border-r border-main-blue-light" />
          <article class="w-full border-l border-main-blue-light">
            <DescriptionBox>
              <span class="font-NotoSerif text-xl font-semibold text-main-blue">
                2015
              </span>
              <br />
              - 쇼미더머니 4 출연
              <br />- 싱글 <span class="font-NotoSerif">[My Man]</span>으로 데뷔
            </DescriptionBox>
            <DescriptionBox>
              <span class="font-NotoSerif text-xl font-semibold text-main-blue">
                2016
              </span>
              <br />- 첫 <span class="font-NotoSerif">EP</span> 앨범인{" "}
              <span class="font-NotoSerif">'FLIP'</span> 발매
            </DescriptionBox>
            <DescriptionBox>
              <span class="font-NotoSerif text-xl font-semibold text-main-blue">
                2017
              </span>
              <br />- <span class="font-NotoSerif">H1GHR MUSIC</span>의 첫
              아티스트로 계약
            </DescriptionBox>
            <DescriptionBox>
              <span class="font-NotoSerif text-xl font-semibold text-main-blue">
                2019
              </span>
              <br />- 첫 단독콘서트{" "}
              <span class="font-NotoSerif">'WORLD TOUR IN SEOUL'</span>
            </DescriptionBox>
            <DescriptionBox>
              <span class="font-NotoSerif text-xl font-semibold text-main-blue">
                2020
              </span>
              <br />- 입대
            </DescriptionBox>
            <DescriptionBox>
              <span class="font-NotoSerif text-xl font-semibold text-main-blue">
                2022
              </span>
              <br />- 전역
              <br />- 하이어뮤직과 계약 종료
            </DescriptionBox>
            <DescriptionBox>
              <span class="font-NotoSerif text-xl font-semibold text-main-blue">
                2023
              </span>
              <br />- KC 레이블 런칭
            </DescriptionBox>
          </article>
        </div>
        <div class="mx-7">
          <span class="m-auto animate-ping text-main-blue-light">
            <TbPointFilled size="30" />
          </span>
        </div>
        {/* more string */}
        <div class="mx-12 mb-14">
          <a
            href="https://ko.wikipedia.org/wiki/%EC%8B%9D%EC%BC%80%EC%9D%B4"
            target="_blank"
            rel="noreferrer"
            class="font-NotoSerif font-normal text-gray-500"
          >
            more info ...
          </a>
        </div>
      </section>
    </div>
  );
};
