import React from "react";
import { Header } from "../components/Header";
import { NewsList } from "../components/NewsList";
// import { Post } from "../components/Post";

export const News = (props) => {
  return (
    <div class='w-full flex flex-col bg-white'>
      <Header changeColor={true} />
      <div class='m-7'>
        <article>
          <p class='font-NotoSerif text-gray-400 text-sm'>
            Last Update: 2023.06.21 20:00 PM
          </p>
          <NewsList />
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
