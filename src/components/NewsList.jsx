import React from "react";
import newsData from "../crawlingData/news_data.json";
import { NewsItem } from "./NewsItem";

export const NewsList = () => {
  return (
    <ol class='my-5 mb-10'>
      {newsData.map((data) => {
        return (
          <NewsItem
            id={data.id}
            title={data.title}
            link={data.link}
            content={data.content}
            media={data.media}
            date={data.date}
          />
        );
      })}
    </ol>
  );
};
