import React, { useEffect, useState } from "react";
import { DataFetchApi } from "../shared/axios";
import NewsItem from "./NewsItem";

const NewsList = () => {
  const [newsData, setNewsData] = useState([]);

  const getNewsData = async () => {
    const result = await DataFetchApi.get("news_data.json")
      .then((res) => res.data)
      .catch((error) => console.log(error));
    setNewsData(result);
  };

  useEffect(() => {
    getNewsData();
  }, []);

  return (
    <ol className="mt-4 space-y-3">
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

export default NewsList;
