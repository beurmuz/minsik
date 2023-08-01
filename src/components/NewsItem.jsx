import React from "react";

export const NewsItem = ({ id, title, link, content, media, date }) => {
  return (
    <li
      class='font-NotoKo border border-main-blue rounded-md px-4 py-4 my-4 text-base list-none group hover:bg-main-blue'
      key={id}
    >
      <h3 class='font-Pretendard font-bold text-lg py-2 leading-tight group-hover:text-white'>
        {title}
      </h3>
      <p class='leading-none'>
        <a
          class='font-Pretendard text-sm group-hover:text-white '
          href={link}
          target='_blank'
          rel='noreferrer'
        >
          {content.slice(0, 121) + "... 더보기"}
        </a>
      </p>
      <p class='text-right pt-2'>
        <span class='text-gray-800 font-Pretendard text-sm font-normal group-hover:text-white'>
          {media} | {date.slice(-1) === "." ? date.slice(0, -1) : date}
        </span>
      </p>
    </li>
  );
};
