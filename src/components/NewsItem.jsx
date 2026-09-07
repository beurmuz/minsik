import React from "react";

const NewsItem = ({ title, link, content, media, date }) => {
  const formattedDate = date
    ? date.endsWith(".")
      ? date.slice(0, -1)
      : date
    : "";

  return (
    <li className="bg-white rounded-xl border border-black/10 px-5 py-4 transition hover:border-black/20 hover:shadow-sm">
      <p className="font-Pretendard text-xs text-sub-color">
        {media} {formattedDate && `· ${formattedDate}`}
      </p>

      <a
        className="mt-2 block font-Pretendard text-base font-semibold text-black hover:underline focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded"
        href={link}
        target="_blank"
        rel="noreferrer"
        aria-label={`${title} (새 창에서 뉴스 원문 보기)`}
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
        aria-label={`${title} 뉴스 원문 보기`}
      >
        원문 보기 →
      </a>
    </li>
  );
};

export default React.memo(NewsItem);