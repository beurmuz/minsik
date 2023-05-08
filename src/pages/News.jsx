import React from "react";
import { Header } from "../components/Header";
import { NewsList } from "../components/NewsList";
import { Post } from "../components/Post";

export const News = (props) => {
  return (
    <div class='w-full h-full flex flex-col '>
      <Header />
      <div class='m-7'>
        <article>
          <h1 class='text-white'>News</h1>
          <ol class='my-10'>
            <NewsList>웅 뉴스얌</NewsList>
            <NewsList>웅 이것이 뉴스</NewsList>
            <NewsList>웅 뉴스얌</NewsList>
            <NewsList>웅 이것이 뉴스</NewsList>
            <NewsList>웅 뉴스얌</NewsList>
            <NewsList>웅 이것이 뉴스</NewsList>
          </ol>
        </article>
        <article>
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
        </article>
      </div>
    </div>
  );
};
