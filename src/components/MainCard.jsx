import React from "react";
import { Link } from "react-router-dom";

const MainCard = ({
  title,
  to,
  linkAriaLabel,
  children,
  className = "",
  variant = "default",
  titleClassName = "",
  headerClassName = "",
  bodyClassName,
}) => {
  const isSection = variant === "section";
  const paddingClass = isSection ? "p-8" : "p-6";
  const defaultTitleClass = isSection ? "text-2xl" : "text-lg";
  const resolvedBodyClassName =
    bodyClassName ?? (isSection ? "mt-5" : "");

  const computedLinkAriaLabel =
    linkAriaLabel ??
    (typeof title === "string" ? `${title} 더보기 →` : "더보기 →");

  return (
    <article
      className={`rounded-xl bg-white border border-black/10 ${paddingClass} text-black ${className}`.trim()}
    >
      <header
        className={`flex flex-row justify-between items-center ${headerClassName}`.trim()}
      >
        <h2
          className={`font-Pretendard ${defaultTitleClass} font-bold ${titleClassName}`.trim()}
        >
          {title}
        </h2>
        {to ? (
          <Link
            to={to}
            aria-label={computedLinkAriaLabel}
            className="font-Pretendard text-sm text-black/70 hover:text-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 rounded px-2 py-1"
          >
            더보기 →
          </Link>
        ) : null}
      </header>
      <div className={resolvedBodyClassName}>{children}</div>
    </article>
  );
};

export default React.memo(MainCard);
