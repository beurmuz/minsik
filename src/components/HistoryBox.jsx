import React from "react";
import { ContentItem } from "./ContentItem";
import historyData from "../assets/data/history.json";
import YearBox from "./YearBox";

export const HistoryBox = (props) => {
  let years = Object.keys(historyData).sort((a, b) => b - a);

  return (
    <div className="flex flex-col justify-center">
      {/* <div className="w-12 " />
      <div className="w-full mr-12"> */}
      {years.map((year) => {
        return (
          <div className="flex flex-col">
            <YearBox>{year}</YearBox>
            <div className="flex flex-row">
              <div className="w-12" />
              <ol className="w-full flex flex-col pl-3 pr-12 py-5 mb-10 border-l-2 border-main-blue-light">
                {historyData[year].map((contents) => {
                  return (
                    <ContentItem
                      imgUrl={contents.imgUrl}
                      newsUrl={contents.newsUrl}
                    >
                      <h3 className="font-Pretendard font-bold text-lg">
                        {contents.month}
                      </h3>
                      {contents.content}
                    </ContentItem>
                  );
                })}
              </ol>
            </div>
          </div>
        );
      })}
    </div>
    // </div>
  );
};
