import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import homeLogo from "../assets/images/homeLogo.svg";
import { Link } from "react-router-dom";

export const Home = (props) => {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <Header />
      <div className="m-10 h-3/5 flex flex-col text-center ">
        <img
          src={homeLogo}
          className="m-auto w-96 animate-[spin_10s_linear_infinite] "
          alt="home Logo"
        />
        <p className=" h-10 flex items-center m-auto">
          <span className="font-NotoSerif text-white text-xl font-bold ">
            <Link to="/intro">
              <button>who is he? →</button>
            </Link>
          </span>
        </p>
      </div>
      <Footer />
    </div>
  );
};
