import React, { useEffect, useState } from "react";
import { DataFetchApi } from "../shared/axios";
import FestivalItem from "./FestivalItem";

const FestivalsList = (props) => {
  const [festivals, setFestivals] = useState([]);

  const getFestivalData = async () => {
    const result = await DataFetchApi
      .get("festival_data.json")
      .then((res) => res.data)
      .catch((error) => console.log(error));
    setFestivals(result);
  };

  useEffect(() => {
    getFestivalData();
    // eslint-disable-next-line
  }, []);

  return (
    <article className="w-screen h-screen flex flex-col justify-center p-10 animate-pageLoadEffect">
      <div className="flex flex-row justify-between pt-1 px-1 max-sm:flex-col">
        <h2 className="font-Pretendard text-main-blue/80 text-2xl font-bold">
          최신 공연 정보
        </h2>
        <p className="font-Pretendard text-gray-500 text-sm my-auto">
          update: 매주 수요일 9시
        </p>
      </div>
      <ol className="flex flex-row overflow-x-auto py-5">
        {festivals &&
          festivals.map((festival, index) => {
            return <FestivalItem festivalInfo={festival} key={index} />;
          })}
      </ol>
      <p className="font-Pretendard text-sm py-5 text-gray-500">
        * 공연명을 누르면 상세페이지로 이동합니다.
      </p>
    </article>
  );
};

export default FestivalsList;
