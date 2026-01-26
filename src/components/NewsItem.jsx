import React from "react";

const NewsItem = ({ id, title, link, content, media, date }) => {
  return (
    <li
      className="bg-white rounded-xl border border-black/10 px-5 py-4 transition hover:border-black/20 hover:shadow-sm"
    >
      <p className="font-Pretendard text-xs text-sub-color">
        {media} · {date.slice(-1) === "." ? date.slice(0, -1) : date}
      </p>
      <a
        className="mt-2 block font-Pretendard text-base font-semibold text-black hover:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded"
        href={link}
        target="_blank"
        rel="noreferrer"
        aria-describedby="클릭 시 뉴스 원문을 볼 수 있습니다."
      >
        {title}
      </a>
      <p className="mt-2 font-Pretendard text-sm text-sub-color line-clamp-3">
        {content}
      </p>
      <a
        className="mt-3 inline-block font-Pretendard text-sm text-black/70 hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded py-1 w-fit"
        href={link}
        target="_blank"
        rel="noreferrer"
        aria-describedby="클릭 시 뉴스 원문을 볼 수 있습니다."
      >
        원문 보기 →
      </a>
    </li>
  );
};

export default NewsItem;
