import React, { useEffect, useState } from "react";
import { DataFetchApi } from "../shared/axios";
import NewsItem from "./NewsItem";
import Skeleton from "./Skeleton";

const NewsList = () => {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getNewsData = async () => {
    setIsLoading(true);
    const result = await DataFetchApi.get("news_data.json")
      .then((res) => res.data)
      .catch((error) => console.log(error));
    setNewsData(result);
    setIsLoading(false);
  };

  useEffect(() => {
    getNewsData();
  }, []);

  return (
    <ol className="mt-4 space-y-3">
      {isLoading
        ? Array.from({ length: 3 }).map((_, idx) => (
          <li
            key={`skel-news-${idx}`}
            className="bg-white rounded-xl border border-black/10 px-5 py-4"
          >
            <Skeleton className="w-24 h-3 mb-2" />
            <Skeleton className="w-3/4 h-5 mb-3" />
            <Skeleton className="w-full h-4 mb-1" />
            <Skeleton className="w-2/3 h-4 mb-3" />
            <Skeleton className="w-20 h-4 mt-2" />
          </li>
        ))
        : newsData &&
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

export default NewsList;
