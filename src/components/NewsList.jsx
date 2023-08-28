import React, { useEffect, useState } from "react";
import { newsApi } from "../shared/axios";
import { NewsItem } from "./NewsItem";

export const NewsList = () => {
  const [newsData, setNewsData] = useState([]);

  const getNewsData = async () => {
    const result = await newsApi
      .get("news_data.json")
      .then((res) => res.data)
      .catch((error) => console.log(error));
    setNewsData(result);
  };

  useEffect(() => {
    getNewsData();
  }, []);

  return (
    <ol className="my-5 mb-10">
      {newsData &&
        newsData.map((data) => {
          return (
            <NewsItem
              id={data.id}
              key={data.id}
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
