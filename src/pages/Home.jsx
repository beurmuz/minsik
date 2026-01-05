import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import homeLogo from "../assets/images/homeLogo.svg";
import { Link } from "react-router-dom";
import MetadataTemplate from "../SEO/MetadataTemplate";
import imageURL from "../assets/images/back.webp";

const Home = (props) => {
  return (
    <>
      <MetadataTemplate
        metaTitle={"SIK-K"}
        metaDescription={
          "SIK-K(식케이(=권민식)) 팬이 개발한 SIK-K 사이트 입니다."
        }
        ogUrl={"https://sik-k.netlify.app/"}
        ogTitle={"SIK-K 사이트"}
        ogDescription={"8년차 팬이 만든 SIK-K(식케이) 웹 사이트"}
      />
      <div
        className="w-full h-full flex flex-col justify-between bg-cover bg-center overflow-x-hidden px-52 max-lg:px-32 max-md:px-0"
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      >
        <Header />
        <section className="m-10 h-3/5 flex flex-col text-center animate-pageLoadEffect">
          <img
            src={homeLogo}
            className="m-auto w-72 animate-[spin_10s_linear_infinite] "
            alt="home Logo"
          />
          <p className=" h-10 flex items-center m-auto">
            <Link to="/intro">
              <button
                type="button"
                aria-label="소개 페이지로 이동"
                className="font-NotoSerif text-white text-xl font-bold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded px-2 py-1"
              >
                who is he? →
              </button>
            </Link>
          </p>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default React.memo(Home);
