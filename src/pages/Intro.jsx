import React from "react";
import { BsArrowDown } from "react-icons/bs";
import { TbPointFilled } from "react-icons/tb";
import faceImg from "../assets/images/face.png";
import { DescriptionBox } from "../components/DescriptionBox";
import { Header } from "../components/Header";

export const Intro = (props) => {
  return (
    <div class=' bg-white'>
      <section class='w-screen h-screen flex flex-col text-center '>
        <Header changeColor={true} />
        <div class='flex flex-col m-auto '>
          <div class='m-auto w-72'>
            <img src={faceImg} alt='Sik-K face' />
          </div>
          <h2 class='font-NotoSerif text-main-blue text-5xl font-bold mt-7 mb-2'>
            SIK-K
          </h2>
          <p class='font-NotoSerif text-lg'>(1994.02.26)</p>
          <p class='font-NotoSerif text-xl mb-10'>Korean Rapper</p>
          <div class='text-center my-10 mx-auto text-main-blue-light animate-bounce'>
            <BsArrowDown size='30' />
          </div>
        </div>
      </section>
      <section class='w-screen h-screen flex flex-col'>
        <div class='flex flex-row'>
          <article class='w-1/2 border-r border-main-blue-light' />
          <article class='w-1/2 border-l border-main-blue-light'>
            <DescriptionBox>
              <span class='font-NotoSerif text-xl font-semibold text-main-blue'>
                2015
              </span>
              <br />
              쇼미더머니 4를 통해 데뷔
            </DescriptionBox>
            <DescriptionBox>
              <span class='font-NotoSerif text-xl font-semibold text-main-blue'>
                2016
              </span>
              <br />첫 EP 'FLIP' 발매
            </DescriptionBox>
            <DescriptionBox>
              <span class='font-NotoSerif text-xl font-semibold text-main-blue'>
                2017
              </span>
              <br />
              하이어뮤직의 첫 아티스트로 계약
            </DescriptionBox>
            <DescriptionBox>
              <span class='font-NotoSerif text-xl font-semibold text-main-blue'>
                2019
              </span>
              <br />첫 단독콘서트 진행
            </DescriptionBox>
            <DescriptionBox>
              <span class='font-NotoSerif text-xl font-semibold text-main-blue'>
                2020
              </span>
              <br />
              입대
            </DescriptionBox>
            <DescriptionBox>
              <span class='font-NotoSerif text-xl font-semibold text-main-blue'>
                2022
              </span>
              <br />
              전역 / 하이어뮤직과 계약 종료
            </DescriptionBox>
            <DescriptionBox>
              <span class='font-NotoSerif text-xl font-semibold text-main-blue'>
                2023
              </span>
              <br />
              KC 레이블 런칭 <br />- 첫 아티스트이자 CEO
            </DescriptionBox>
          </article>
        </div>
        <div class='mx-auto mt-0 my-3 animate-ping text-main-blue-light'>
          <TbPointFilled size='30' />
        </div>
        <div class='m-auto '>
          <a
            href='https://namu.wiki/w/%EC%8B%9D%EC%BC%80%EC%9D%B4'
            target='_blank'
            rel='noreferrer'
            class='font-NotoSerif font-normal text-gray-500'
          >
            more info ...
          </a>
        </div>
      </section>
    </div>
  );
};
