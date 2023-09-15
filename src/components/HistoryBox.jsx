import React from "react";
import HistoryItem from "./HistoryItem";
import historyData from "../assets/data/history.json";
import YearBox from "./YearBox";

const HistoryBox = () => {
  let years = Object.keys(historyData).sort((a, b) => b - a);

  console.log("😤 HistoryBox 컴포넌트 호출!");

  return (
    <div className="flex flex-col justify-center">
      {years.map((year) => {
        return (
          <article className="flex flex-col" key={year}>
            <YearBox>{year}</YearBox>
            <div className="flex flex-row">
              <div className="w-12" />
              <ol className="w-full flex flex-col pl-3 pr-12 py-5 mb-10 border-l-2 border-main-blue-light">
                {historyData[year].map((contents) => {
                  return (
                    <HistoryItem
                      imgUrl={contents.imgUrl}
                      newsUrl={contents.newsUrl}
                      // key={contents.id}
                    >
                      <h3
                        className="font-Pretendard font-bold text-lg"
                        key={contents.id}
                      >
                        {contents.month}
                      </h3>
                      {contents.content}
                    </HistoryItem>
                  );
                })}
              </ol>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default HistoryBox;
