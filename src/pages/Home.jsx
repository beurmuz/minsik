import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import homeLogo from "../assets/images/homeLogo.svg";
import MetadataTemplate from "../SEO/MetadataTemplate";
import imageURL from "../assets/images/back.webp";
import { SITE_CONTAINER } from "../shared/layout";

const Home = () => {
  return (
    <>
      <MetadataTemplate
        metaTitle="SIK-K"
        metaDescription="SIK-K(식케이(=권민식)) 팬이 개발한 SIK-K 사이트 입니다."
        ogUrl="https://sik-k.netlify.app/"
        ogTitle="SIK-K 사이트"
        ogDescription="8년차 팬이 만든 SIK-K(식케이) 웹 사이트"
      />
      
      <Helmet>
        <link rel="preload" as="image" href={imageURL} fetchPriority="high" />
      </Helmet>

      <div
        className="w-full h-screen flex flex-col justify-between bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      >
        <div className="h-[120px] shrink-0" aria-hidden="true" />

        <section
          className={`${SITE_CONTAINER} flex-1 flex flex-col justify-center text-center animate-pageLoadEffect`}
        >
          <div className="flex flex-col gap-20">
            <img
              src={homeLogo}
              className="m-auto w-72 animate-[spin_10s_linear_infinite]"
              alt="SIK-K 메인 로고"
            />
            <p className="h-10 flex items-center m-auto">
              <Link to="/intro">
                <button
                  type="button"
                  aria-label="소개 페이지로 이동"
                  className="font-NotoSerif text-white text-xl font-bold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 rounded px-2 py-1 transition-transform active:scale-95"
                >
                  who is he? →
                </button>
              </Link>
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default React.memo(Home);