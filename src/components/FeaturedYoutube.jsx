import React, { useMemo } from "react";

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
}) => {
  const videoId = useMemo(() => getYoutubeId(youtubeUrl), [youtubeUrl]);
  const posterUrl = useMemo(() => {
    if (!videoId) return null;
    return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
  }, [videoId]);

  const shouldShowIframe = Boolean(videoId);

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

  return (
    <div className={className}>
      <div
        className={`relative ${aspectRatio ? "" : aspectClassName} w-full overflow-hidden rounded-xl border border-black/10 bg-black`.trim()}
        style={aspectRatio ? { aspectRatio } : undefined}
      >
        {shouldShowIframe && iframeSrc ? (
          <iframe
            key={iframeSrc}
            className="absolute inset-0 h-full w-full"
            src={iframeSrc}
            title={posterAlt}
            loading="lazy"
            allow="encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : posterUrl ? (
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
      </div>

      {caption ? (
        <p className="mt-3 font-Pretendard text-sm text-gray-700">{caption}</p>
      ) : null}
    </div>
  );
};

export default React.memo(FeaturedYoutube);
