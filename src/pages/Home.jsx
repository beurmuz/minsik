import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import homeLogo from "../assets/images/homeLogo.svg";
import { Link } from "react-router-dom";
import MetadataTemplate from "../SEO/MetadataTemplate";
import imageURL from "../assets/images/back.webp";

const Home = (props) => {
  console.log("🏡 Home 컴포넌트 호출");

  return (
    <>
      <MetadataTemplate
        metaTitle={"SIK-K"}
        metaDescription={
          "SIK-K(식케이(=권민식)) 팬이 개발한 SIK-K 사이트 입니다."
        }
        ogUrl={"https://sik-k.netlify.app/"}
        ogTitle={"SIK-K 사이트"}
        ogDescription={"6년차 팬이 만든 SIK-K(식케이) 웹 사이트"}
      />
      <div
        className="w-full h-full flex flex-col justify-between bg-cover bg-center overflow-x-hidden"
        style={{
          backgroundImage: `url(${imageURL})`,
        }}
      >
        <Header />
        <section className="m-10 h-3/5 flex flex-col text-center ">
          <img
            src={homeLogo}
            className="m-auto w-80 animate-[spin_10s_linear_infinite] "
            alt="home Logo"
          />
          <p className=" h-10 flex items-center m-auto">
            <Link to="/intro">
              <button
                type="button"
                name="go to Introduce page"
                className="font-NotoSerif text-white text-xl font-bold"
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
