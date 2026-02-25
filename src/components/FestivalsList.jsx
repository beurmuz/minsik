import React, { useEffect, useMemo, useState } from "react";
import { DataFetchApi } from "../shared/axios";
import FestivalItem from "./FestivalItem";
import Skeleton from "./Skeleton";

const FestivalsList = ({ upcomingLimit = null, pastLimit = 3 }) => {
  const [festivals, setFestivals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getFestivalData = async () => {
    setIsLoading(true);
    const result = await DataFetchApi.get("festival_data.json")
      .then((res) => res.data)
      .catch((error) => console.log(error));
    setFestivals(result);
    setIsLoading(false);
  };

  useEffect(() => {
    getFestivalData();
    // eslint-disable-next-line
  }, []);

  const { upcoming, past } = useMemo(() => {
    if (isLoading || !festivals) return { upcoming: [], past: [] };

    const toDate = (ymd) => {
      // ... existing parse logic ...
      const [y, m, d] = ymd.split(".").map((v) => Number(v));
      if (!y || !m || !d) return null;
      return new Date(y, m - 1, d);
    };

    const parseRangeEnd = (range) => {
      if (!range) return null;
      const matches = String(range).match(/\d{4}\.\d{2}\.\d{2}/g);
      if (!matches || matches.length === 0) return null;
      const end = matches.length >= 2 ? matches[1] : matches[0];
      return toDate(end);
    };

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const normalized = (festivals ?? [])
      .map((f) => ({
        ...f,
        _endDate: parseRangeEnd(f.date),
      }))
      .filter((f) => f._endDate instanceof Date && !Number.isNaN(f._endDate));

    const upcomingAll = normalized
      .filter((f) => f._endDate >= today)
      .sort((a, b) => a._endDate - b._endDate);

    const pastAll = normalized
      .filter((f) => f._endDate < today)
      .sort((a, b) => b._endDate - a._endDate);

    return {
      upcoming:
        typeof upcomingLimit === "number"
          ? upcomingAll.slice(0, upcomingLimit)
          : upcomingAll,
      past: pastAll.slice(0, pastLimit),
    };
  }, [festivals, upcomingLimit, pastLimit, isLoading]);

  return (
    <div className="flex flex-col gap-6">
      <section>
        <h3 className="font-Pretendard text-base font-semibold text-black">
          예정된 공연
        </h3>
        {isLoading ? (
          <div className="mt-3 grid grid-cols-1 gap-4">
            <div className="rounded-xl border border-black/10 bg-white overflow-hidden">
              <Skeleton className="aspect-[4/5] w-full" />
              <div className="p-4">
                <Skeleton className="w-20 h-3 mb-2" />
                <Skeleton className="w-3/4 h-5" />
              </div>
            </div>
          </div>
        ) : upcoming.length > 0 ? (
          <ol className="mt-3 grid grid-cols-1 gap-4 ">
            {upcoming.map((festival) => {
              return <FestivalItem festivalInfo={festival} key={festival.id} />;
            })}
          </ol>
        ) : (
          <p className="mt-3 font-Pretendard text-sm text-sub-color">
            예정된 공연이 없어요.
          </p>
        )}
      </section>

      <section>
        <h3 className="font-Pretendard text-base font-semibold text-black">
          지난 공연
        </h3>
        {isLoading ? (
          <div className="mt-3 grid grid-cols-1 gap-4">
            {Array.from({ length: 2 }).map((_, idx) => (
              <div
                key={`skel-fest-p-${idx}`}
                className="rounded-xl border border-black/10 bg-white overflow-hidden"
              >
                <div className="flex flex-row">
                  <Skeleton className="w-24 h-24 m-4 rounded flex-shrink-0" />
                  <div className="flex flex-col justify-center flex-1 pr-4">
                    <Skeleton className="w-20 h-3 mb-2" />
                    <Skeleton className="w-full h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : past.length > 0 ? (
          <ol className="mt-3 grid grid-cols-1 gap-4 ">
            {past.map((festival) => {
              return <FestivalItem festivalInfo={festival} key={festival.id} />;
            })}
          </ol>
        ) : (
          <p className="mt-3 font-Pretendard text-sm text-sub-color">
            표시할 공연 정보가 없어요.
          </p>
        )}
      </section>
    </div>
  );
};

export default FestivalsList;
