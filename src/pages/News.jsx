import React from "react";
import { Header } from "../components/Header";
// import { Post } from "../components/Post";
import newsData from "../crawlingData/news_data.json";

export const News = (props) => {
  const newsList = newsData.map((article) => {
    return (
      <li
        class='bg-sky-50/80 font-NotoKo border rounded-md p-4 my-3 text-base list-none'
        key={article.id}
      >
        <h3 class=' font-Pretendard font-bold text-lg py-2 leading-tight'>
          {article.title}
        </h3>
        <p>
          <a
            class='font-Pretendard text-sm hover:font-semibold'
            href={article.link}
            target='_blank'
            rel='noreferrer'
          >
            {article.content.slice(0, 101) + "..."}
          </a>
        </p>
        <p class='text-right pt-2'>
          <span class='font-Pretendard text-sm font-bold'>{article.date}</span>
        </p>
      </li>
    );
  });

  return (
    <div class='w-full h-full flex flex-col '>
      <Header />
      <div class='m-7'>
        <article>
          <p class='text-white font-NotoSerif text-sm'>
            Last Update: 2023.06.21 20:00 PM
          </p>
          <ol class='my-5 mb-10'>{newsList}</ol>
        </article>
        {/* <article>
          <h1 class='text-white'>Instagram</h1>
          <div class='my-10 grid grid-cols-3'>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </article> */}
      </div>
    </div>
  );
};
