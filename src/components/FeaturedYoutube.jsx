import React, { useEffect, useMemo, useState } from "react";

function getYoutubeId(url) {
  if (!url) return null;
  try {
    const u = new URL(url);
    const host = u.hostname.replace("www.", "");
    if (host === "youtu.be") {
      return u.pathname.replace("/", "") || null;
    }
    if (host.endsWith("youtube.com")) {
      const v = u.searchParams.get("v");
      if (v) return v;
      const parts = u.pathname.split("/").filter(Boolean);
      const last = parts[parts.length - 1];
      return last || null;
    }
  } catch {
    // fall through
  }
  const m = String(url).match(/(?:v=|youtu\.be\/|embed\/)([A-Za-z0-9_-]{6,})/);
  return m?.[1] ?? null;
}

const FeaturedYoutube = ({
  youtubeUrl,
  caption,
  className = "",
  posterAlt = "최신 뮤직비디오",
  aspectClassName = "aspect-video",
  aspectRatio,
  showControls = true,
  loadMode = "immediate", // "immediate" | "interaction" | "idle"
  idleDelayMs = 1200,
  showPosterBeforeLoad = true,
}) => {
  const videoId = useMemo(() => getYoutubeId(youtubeUrl), [youtubeUrl]);
  const posterUrl = useMemo(() => {
    if (!videoId) return null;
    return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  }, [videoId]);

  const shouldShowIframe = Boolean(videoId);
  const [isActivated, setIsActivated] = useState(loadMode === "immediate");

  const iframeSrc = useMemo(() => {
    if (!videoId) return null;
    const base = `https://www.youtube.com/embed/${videoId}`;
    const params = new URLSearchParams({
      autoplay: "0",
      mute: "0",
      playsinline: "1",
      controls: showControls ? "1" : "0",
      rel: "0",
      modestbranding: "1",
      iv_load_policy: "3",
    });
    return `${base}?${params.toString()}`;
  }, [videoId, showControls]);

  useEffect(() => {
    if (loadMode === "immediate") {
      setIsActivated(true);
      return;
    }
    if (loadMode !== "idle") return;
    if (!videoId) return;

    let cancelled = false;

    const activate = () => {
      if (!cancelled) setIsActivated(true);
    };

    // requestIdleCallback이 있으면 idle에 맞춰, 없으면 timeout으로 폴백
    const ric = window.requestIdleCallback?.(
      () => activate(),
      { timeout: Math.max(1000, idleDelayMs) }
    );
    const tid = window.setTimeout(() => activate(), idleDelayMs);

    return () => {
      cancelled = true;
      if (ric) window.cancelIdleCallback?.(ric);
      window.clearTimeout(tid);
    };
  }, [idleDelayMs, loadMode, videoId]);

  return (
    <div className={className}>
      <div
        className={`relative ${aspectRatio ? "" : aspectClassName} w-full overflow-hidden rounded-xl border border-black/10 bg-black`.trim()}
        style={aspectRatio ? { aspectRatio } : undefined}
      >
        {shouldShowIframe && iframeSrc && isActivated ? (
          <iframe
            key={iframeSrc}
            className="absolute inset-0 h-full w-full"
            src={iframeSrc}
            title={posterAlt}
            loading="lazy"
            allow="encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : showPosterBeforeLoad && posterUrl ? (
          <img
            src={posterUrl}
            alt={posterAlt}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-95"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-Pretendard text-sm text-white/80">
              표시할 영상이 없어요.
            </p>
          </div>
        )}

        {/* subtle overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-black/0 to-black/0" />

        {!isActivated && shouldShowIframe ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              type="button"
              onClick={() => setIsActivated(true)}
              className="inline-flex items-center justify-center rounded-full border border-white/50 bg-black/40 px-5 py-3 font-Pretendard text-sm font-medium text-white hover:bg-black/55 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              aria-label="영상 불러오기"
            >
              영상 불러오기
            </button>
          </div>
        ) : null}
      </div>

      {caption ? (
        <p className="mt-3 font-Pretendard text-sm text-gray-700">{caption}</p>
      ) : null}
    </div>
  );
};

export default React.memo(FeaturedYoutube);
