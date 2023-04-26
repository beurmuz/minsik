import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
// import mainlogo from "../assets/images/mainLogo.svg";
import homeLogo from "../assets/images/homeLogo.svg";

export const Home = (props) => {
  return (
    <div class='w-full h-full flex flex-col justify-between'>
      <Header />
      <div class='m-10 h-3/5 flex flex-col text-center '>
        <img src={homeLogo} class='m-auto' alt='home Logo' />
        <p class=' h-10 flex items-center m-auto'>
          <span class='font-NotoSerif text-white text-xl font-bold '>
            who is he? →
          </span>
        </p>
      </div>
      <Footer />
    </div>
  );
};
