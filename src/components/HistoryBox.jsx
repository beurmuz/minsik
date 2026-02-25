import React, { useMemo, useState, useEffect, useRef } from "react";
import historyData from "../assets/data/history.json";

const HistoryBox = () => {
  // 1단계: 보여줄 아이템 개수를 관리하는 state
  // 초기값: 10개만 보여줌
  const [visibleCount, setVisibleCount] = useState(10);

  const items = useMemo(() => {
    const flat = Object.entries(historyData ?? {}).flatMap(([year, list]) => {
      const safeList = Array.isArray(list) ? list : [];
      return safeList.map((entry, idx) => {
        const monthText = String(entry?.month ?? "");
        const parts = monthText.split(".");
        const y = Number(parts?.[0] ?? year);
        const m = Number(parts?.[1] ?? 0);
        const sortKey = Number.isFinite(y)
          ? y * 100 + (Number.isFinite(m) ? m : 0)
          : 0;

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

  // 2단계: 실제로 보여줄 아이템만 필터링
  // visibleCount만큼만 잘라서 보여줌
  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length; // 더 보여줄 아이템이 있는지 확인

  // 3단계: Intersection Observer를 위한 ref
  // 이 요소가 화면에 보이면 스크롤이 끝에 도달한 것으로 감지
  const observerTarget = useRef(null);

  // 4단계: Intersection Observer로 스크롤 감지
  useEffect(() => {
    // 더 보여줄 아이템이 없으면 observer 설정 안 함
    if (!hasMore || !observerTarget.current) return;

    // Intersection Observer 생성
    // 이 요소가 화면에 보이면 콜백 함수 실행
    const observer = new IntersectionObserver(
      (entries) => {
        // entries[0]는 우리가 관찰하는 요소
        if (entries[0].isIntersecting) {
          // 화면에 보이면 더 많은 아이템 로드 (10개씩 추가)
          setVisibleCount((prev) => Math.min(prev + 10, items.length));
        }
      },
      {
        // 요소가 10%만 보여도 감지 (너무 빨리 감지되지 않도록)
        threshold: 0.1,
        // 루트 요소의 여백 (화면 하단에서 100px 전에 감지)
        rootMargin: "100px",
      }
    );

    // observerTarget을 관찰 시작
    observer.observe(observerTarget.current);

    // 컴포넌트가 언마운트되거나 hasMore가 false가 되면 관찰 중지
    return () => {
      observer.disconnect();
    };
  }, [hasMore, items.length]); // hasMore나 items.length가 변경되면 다시 설정

  return (
    <div className="relative">
      <ol className="relative">
        {visibleItems.map((item, idx) => {
          const prevYear = visibleItems[idx - 1]?._year ?? null;
          const showYearHeader = item._year !== prevYear;

          return (
            <React.Fragment key={`${item._year}-${item?.id ?? idx}`}>
              {showYearHeader ? (
                <li className="sticky top-0 -ml-6 -mr-6 mb-1 bg-white/90 backdrop-blur px-6 pt-5 pb-2">
                  <p className="font-Pretendard text-sm font-semibold text-black">
                    {item._year}
                  </p>
                </li>
              ) : null}

              <li className="relative mb-6">
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
                          loading="lazy"
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      ) : null}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center rounded-full border border-black/10 bg-gray-50 px-2.5 py-1 font-Pretendard text-sm text-sub-color">
                          {item?._monthText}
                        </span>
                      </div>
                      <p className="mt-3 font-Pretendard text-base font-semibold text-black line-clamp-3">
                        {item?.content} →
                      </p>
                    </div>
                  </div>
                </a>
              </li>
            </React.Fragment>
          );
        })}
      </ol>
      
      {/* 4단계: 스크롤 감지를 위한 타겟 요소 */}
      {hasMore && (
        <div 
          ref={observerTarget}
          className="h-20 flex items-center justify-center"
        >
          <div className="text-center py-4 text-sub-color font-Pretendard text-sm">
            로딩 중...
          </div>
        </div>
      )}
      
      {/* 5단계: 모든 아이템을 다 보여줬을 때 끝 표시 */}
      {!hasMore && items.length > 0 && (
        <div className="text-center py-8 text-sub-color font-Pretendard text-sm">
          모든 활동 로그를 불러왔습니다.
        </div>
      )}
    </div>
  );
};

export default HistoryBox;
