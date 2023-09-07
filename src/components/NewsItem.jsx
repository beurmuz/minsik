import React from "react";

export const NewsItem = ({ id, title, link, content, media, date }) => {
  return (
    <li
      className=" bg-gray-100 rounded-lg px-4 py-4 mb-4 hover:bg-main-blue"
      key={id}
    >
      <h3 className="font-Pretendard font-bold text-lg py-2 leading-tight group-hover:text-white">
        {title}
      </h3>
      <p className="leading-none">
        <a
          className="font-Pretendard text-sm group-hover:text-white "
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          {content.slice(0, 90) + "... 더보기"}
        </a>
      </p>
      <p className="text-right pt-2">
        <span className="text-gray-800 font-Pretendard text-sm font-normal group-hover:text-white">
          {media} | {date.slice(-1) === "." ? date.slice(0, -1) : date}
        </span>
      </p>
    </li>
  );
};
