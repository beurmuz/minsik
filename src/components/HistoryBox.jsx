import React, { useMemo } from "react";
import historyData from "../assets/data/history.json";

const HistoryBox = () => {
  const items = useMemo(() => {
    const flat = Object.entries(historyData ?? {}).flatMap(([year, list]) => {
      const safeList = Array.isArray(list) ? list : [];
      return safeList.map((entry, idx) => {
        const monthText = String(entry?.month ?? "");
        const parts = monthText.split(".");
        const y = Number(parts?.[0] ?? year);
        const m = Number(parts?.[1] ?? 0);
        const sortKey = Number.isFinite(y) ? y * 100 + (Number.isFinite(m) ? m : 0) : 0;

        return {
          ...entry,
          _year: Number.isFinite(y) ? String(y) : String(year),
          _monthText: monthText,
          _sortKey: sortKey,
          _idx: idx,
        };
      });
    });

    flat.sort((a, b) => {
      if (b._sortKey !== a._sortKey) return b._sortKey - a._sortKey;
      const bid = Number(b?.id ?? -1);
      const aid = Number(a?.id ?? -1);
      if (bid !== aid) return bid - aid;
      return (b._idx ?? 0) - (a._idx ?? 0);
    });

    return flat;
  }, []);

  return (
    <div className="relative">
      <ol className="relative border-l border-black/10 pl-6">
        {items.map((item, idx) => {
          const prevYear = items[idx - 1]?._year ?? null;
          const showYearHeader = item._year !== prevYear;

          return (
            <React.Fragment key={`${item._year}-${item?.id ?? idx}`}>
              {showYearHeader ? (
                <li className="sticky top-0 z-10 -ml-6 -mr-6 mb-4 bg-white/90 backdrop-blur border-b border-black/10 px-6 py-3">
                  <p className="font-Pretendard text-sm font-semibold text-black">
                    {item._year}
                  </p>
                </li>
              ) : null}

              <li className="relative mb-6">
                <span
                  className="absolute -left-[7px] top-8 h-3 w-3 rounded-full bg-black"
                  aria-hidden="true"
                />
                <a
                  href={item?.newsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-2xl border border-black/10 bg-white p-5 sm:p-6 transition hover:border-black/20 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  aria-label={`${item?._monthText ?? ""} 활동 로그 링크 열기`}
                >
                  <div className="flex gap-4">
                    <div className="h-20 w-20 sm:h-24 sm:w-24 shrink-0 overflow-hidden rounded-xl border border-black/10 bg-gray-100">
                      {item?.imgUrl ? (
                        <img
                          src={item.imgUrl}
                          alt=""
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      ) : null}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center rounded-full border border-black/10 bg-gray-50 px-2.5 py-1 font-Pretendard text-sm text-gray-700">
                          {item?._monthText}
                        </span>
                      </div>
                      <p className="mt-3 font-Pretendard text-base font-semibold text-black line-clamp-3">
                        {item?.content}
                      </p>
                    </div>

                    <span
                      className="shrink-0 font-Pretendard text-base text-black/60"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </a>
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </div>
  );
};

export default HistoryBox;
