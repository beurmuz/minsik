import React, { useEffect, useMemo, useRef } from "react";
import { dataStore } from "../shared/store";

const AlbumModal = ({ albumInfo, onClose }) => {
  const [albumName, albumImgSrc, albumDate, ablumSort] = [...albumInfo];
  const { releaseList, joinList } = dataStore((state) => state);
  const closeButtonRef = useRef(null);

  const albumData = useMemo(() => {
    const list = ablumSort === "R" ? releaseList : joinList;
    return (list ?? []).filter((song) => song.ablum === albumName);
  }, [ablumSort, albumName, releaseList, joinList]);

  useEffect(() => {
    // 외부 스크롤 막기
    const $body = document.body;
    const prevOverflow = $body.style.overflow;
    $body.style.overflow = "hidden";

    // 첫 포커스
    closeButtonRef.current?.focus();

    // ESC 키로 모달 닫기
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose?.();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      $body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
    // eslint-disable-next-line
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 animate-ablumModalLoadEffect"
      role="dialog"
      aria-modal="true"
      aria-labelledby="album-modal-title"
      aria-describedby="album-modal-desc"
      onMouseDown={(e) => {
        if (e.currentTarget === e.target) onClose?.();
      }}
    >
      <div className="relative w-full max-w-4xl max-h-[75dvh] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl flex flex-col">
        <div className="flex items-center justify-between gap-4 border-b border-black/10 px-6 py-5">
          <div className="flex items-center gap-4 min-w-0">
            <img
              src={albumImgSrc}
              alt={`${albumName} 앨범 커버`}
              className="h-20 w-20 shrink-0 rounded-lg border border-black/10 object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
            <div className="min-w-0 text-left flex flex-col justify-center">
              <h3
                id="album-modal-title"
                className="font-Pretendard text-lg font-bold text-black leading-snug truncate"
                title={albumName}
              >
                {albumName}
              </h3>
              <p
                id="album-modal-desc"
                className="font-Pretendard text-sm text-gray-700 mt-1"
              >
                발매일: {albumDate} · 수록곡 {albumData.length}곡
              </p>
            </div>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            aria-label="앨범 모달 닫기"
            onClick={() => onClose?.()}
            className="shrink-0 rounded-md w-10 h-10 flex items-center justify-center font-Pretendard font-normal text-2xl leading-none hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            X
          </button>
        </div>

        <div
          className="flex-1 min-h-0 overflow-y-auto px-6 py-5 overscroll-contain"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <ul className="flex flex-col text-left">
            {albumData.map((song, index) => {
              const melonUrl = `https://www.melon.com/song/detail.htm?songId=${song.songId}`;
              return (
                <li
                  key={`${song.songId ?? "song"}-${song.title}-${index}`}
                  className="flex items-center gap-3 border-b border-black/10 py-3 last:border-b-0"
                >
                  <span className="w-7 shrink-0 font-Pretendard text-sm text-gray-500 tabular-nums">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-Pretendard text-sm font-medium text-black truncate">
                      {song.title}
                    </p>
                    <p className="font-Pretendard text-xs text-gray-700 truncate mt-1">
                      {song.artists}
                    </p>
                  </div>
                  {song.songId ? (
                    <a
                      href={melonUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${song.title} 멜론에서 듣기`}
                      className="inline-flex items-center justify-center rounded-md px-2 py-1 font-Pretendard text-sm text-black/60 hover:text-black hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                      title="멜론에서 듣기"
                    >
                      →
                    </a>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AlbumModal);
