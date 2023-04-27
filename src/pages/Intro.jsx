import React from "react";
import { BsArrowDown } from "react-icons/bs";
import { BackHeader } from "../components/BackHeader";
import faceImg from "../assets/images/face.png";
import { DescriptionBox } from "../components/DescriptionBox";

export const Intro = (props) => {
  return (
    <div class=' bg-white'>
      <section class='w-screen h-screen flex flex-col text-center border-2 '>
        <BackHeader />
        <div class='flex flex-col m-auto '>
          <div class='m-auto w-72'>
            <img src={faceImg} alt='Sik-K face' />
          </div>
          <h2 class='font-NotoSerif text-main-blue text-5xl font-bold mt-7 mb-3'>
            SIK-K
          </h2>
          <p class='font-NotoSerif text-xl mb-10'>1994.02.26</p>
          <div class='text-center my-10 mx-auto animate-bounce'>
            <BsArrowDown size='30' />
          </div>
        </div>
      </section>
      <section>
        <article>
          <DescriptionBox>
            is a South Korean rapper. He first garnered attention when he
            appeared on Show Me the Money 4 in 2015.
          </DescriptionBox>
          <DescriptionBox>
            is a South Korean rapper. He first garnered attention when he
            appeared on Show Me the Money 4 in 2015.
          </DescriptionBox>
          <DescriptionBox>
            is a South Korean rapper. He first garnered attention when he
            appeared on Show Me the Money 4 in 2015.
          </DescriptionBox>
          <DescriptionBox>
            is a South Korean rapper. He first garnered attention when he
            appeared on Show Me the Money 4 in 2015.
          </DescriptionBox>
        </article>
      </section>
    </div>
  );
};
