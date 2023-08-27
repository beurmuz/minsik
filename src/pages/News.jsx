import React from "react";
import { Header } from "../components/Header";
import { NewsList } from "../components/NewsList";
import { Footer } from "../components/Footer";

export const News = (props) => {
  return (
    <div className="w-full flex flex-col bg-white">
      <Header changeColor={true} />
      <div className="m-7">
        <article>
          <p className="font-NotoSerif text-gray-400 text-sm">
            Last Update: 2023.08.01 20:00 PM
          </p>
          <NewsList />
        </article>
      </div>
      <Footer />
    </div>
  );
};
