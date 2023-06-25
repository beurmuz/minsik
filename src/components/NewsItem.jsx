import React from "react";

export const NewsItem = ({ id, title, link, content, media, date }) => {
  return (
    <li
      class='font-NotoKo border border-main-blue rounded-md px-4 py-3 my-3 text-base list-none'
      key={id}
    >
      <h3 class='font-Pretendard font-bold text-base py-2 leading-tight'>
        {title}
      </h3>
      <p class='leading-none'>
        <a
          class='font-Pretendard text-sm hover:font-semibold '
          href={link}
          target='_blank'
          rel='noreferrer'
        >
          {content.slice(0, 101) + "..."}
        </a>
      </p>
      <p class='text-right pt-1'>
        <span class='text-gray-800 font-Pretendard text-sm font-normal'>
          {media} | {date.slice(-1) === "." ? date.slice(0, -1) : date}
        </span>
      </p>
    </li>
  );
};
