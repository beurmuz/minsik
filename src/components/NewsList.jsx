import React, { useEffect, useState } from "react";
import { newsApi } from "../shared/axios";
import newsData from "../crawlingData/news_data.json";
import { NewsItem } from "./NewsItem";

export const NewsList = () => {
  // const [newsData, setNewsData] = useState([]);

  // const getNewsData = async () => {
  //   const result = await newsApi.get("news_data.json");
  //   // setNewsData(result);
  //   console.log(result);
  //   // const result = await fetch(
  //   //   "https://raw.githubusercontent.com/beurmuz/minsik/main/src/crawlingData/news_data.json"
  //   // )
  //   //   .then((res) => res.json())
  //   //   .catch("Data Load Error");
  //   // setNewsData(result);
  // };

  // useEffect(() => {
  //   getNewsData();
  // }, []);

  return (
    <ol class='my-5 mb-10'>
      {newsData &&
        newsData.map((data) => {
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
