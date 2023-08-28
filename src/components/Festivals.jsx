import React, { useEffect, useState } from "react";
import { festivalApi } from "../shared/axios";
import FestivalBox from "./FestivalBox";

const Festivals = (props) => {
  const [festivals, setFestivals] = useState([]);

  const getFestivalData = async () => {
    const result = await festivalApi
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
    <section className="w-screen h-screen flex flex-col justify-center p-7">
      <div className="flex flex-row justify-between pt-1 px-1">
        <p className="font-Pretendard text-main-blue/80 text-2xl font-bold">
          최신 공연 정보
        </p>
        <p className="font-Pretendard text-gray-400 text-sm my-auto">
          업데이트: 2023.08.30
        </p>
      </div>
      <div className="flex flex-row overflow-x-auto py-5">
        {festivals &&
          festivals.map((festival) => {
            return <FestivalBox festivalInfo={festival} />;
          })}
      </div>
      <p className="font-Pretendard text-sm py-5 text-gray-400">
        * 공연명을 누르면 상세페이지로 이동합니다.
      </p>
    </section>
  );
};

export default Festivals;
