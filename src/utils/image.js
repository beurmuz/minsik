export function getThumbUrl(url, targetPx = 192) {
  if (!url) return url;
  const raw = String(url);

  try {
    const u = new URL(raw);

    // WordPress/Jetpack CDN (i0.wp.com, i1.wp.com...) often supports fit/resize params
    const fit = u.searchParams.get("fit");
    if (fit) {
      u.searchParams.set("fit", `${targetPx},${targetPx}`);
      return u.toString();
    }

    const resize = u.searchParams.get("resize");
    if (resize) {
      u.searchParams.set("resize", `${targetPx},${targetPx}`);
      return u.toString();
    }

    const w = u.searchParams.get("w");
    const h = u.searchParams.get("h");
    if (w || h) {
      u.searchParams.set("w", String(targetPx));
      u.searchParams.set("h", String(targetPx));
      return u.toString();
    }

    return u.toString();
  } catch {
    // URL 파싱 실패 시 아래 정규식 변환만 시도
  }

  // Apple Music 이미지: .../416x416bb.webp 같은 패턴
  return raw.replace(/\/(\d{2,4})x(\d{2,4})bb\.(webp|jpg|png)$/i, `/${targetPx}x${targetPx}bb.$3`);
}

