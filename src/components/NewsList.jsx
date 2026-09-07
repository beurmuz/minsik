import React, { useEffect, useState } from "react";
import { DataFetchApi } from "../shared/axios";
import NewsItem from "./NewsItem";
import Skeleton from "./Skeleton";

const NewsList = () => {
  const [newsData, setNewsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true; // 메모리 누수 방지 플래그

    const getNewsData = async () => {
      setIsLoading(true);
      try {
        const response = await DataFetchApi.get("news_data.json");
        if (isMounted) {
          setNewsData(response.data || []);
        }
      } catch (error) {
        if (isMounted) {
          setNewsData([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    getNewsData();

    return () => {
      isMounted = false; // Cleanup 시 마운트 해제 처리
    };
  }, []);

  if (isLoading) {
    return (
      <ol className="mt-4 space-y-3">
        {Array.from({ length: 3 }).map((_, idx) => (
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
        ))}
      </ol>
    );
  }

  if (!newsData || newsData.length === 0) {
    return (
      <div className="mt-4 p-8 text-center bg-white rounded-xl border border-black/10 text-sub-color font-Pretendard text-sm">
        현재 등록된 최신 뉴스가 없습니다.
      </div>
    );
  }

  return (
    <ol className="mt-4 space-y-3">
      {newsData.map((data) => (
        <NewsItem
          id={data.id}
          key={data.id || data.link}
          title={data.title}
          link={data.link}
          content={data.content}
          media={data.media}
          date={data.date}
        />
      ))}
    </ol>
  );
};

export default NewsList;