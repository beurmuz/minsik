import React from "react";

export const HistoryItem = ({ imgUrl, newsUrl, children }) => {
  return (
    <li className="text-black font-Pretendard rounded-md p-2 text-base list-none">
      {children}
      <div className="min-[540px]:w-1/2 min-[700px]:w-1/3">
        <img src={imgUrl} alt="historyImg" className="max-w-full h-auto" />
        <p className="text-right">
          <a href={newsUrl} className="text-sm text-gray-400 font-Pretendard">
            자세히 보기
          </a>
        </p>
      </div>
    </li>
  );
};