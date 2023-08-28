import React, { useEffect, useState } from "react";
import { newsApi } from "../shared/axios";
import { NewsItem } from "./NewsItem";
import { RaceBy } from "@uiball/loaders";

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
      {newsData ? (
        newsData.map((data) => {
          if (data.id < 5) {
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
          }
        })
      ) : (
        <div className="flex h-full">
          <span className="m-auto">
            <RaceBy size={50} lineWeight={3} speed={1.4} color="gray" />
          </span>
        </div>
      )}
    </ol>
  );
};
