import React, { useState, useEffect, useRef } from "react";
import MainCard from "./MainCard";
import Skeleton from "./Skeleton";

const YouTubeVideo = ({ videoId, title = "Video", className = "" }) => {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef(null);

  // Intersection Observer로 뷰포트 진입 시에만 비디오 로드 (LCP 최적화)
  useEffect(() => {
    if (!videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoadVideo) {
            setShouldLoadVideo(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "100px", // 뷰포트 100px 전에 미리 로드 시작
      }
    );

    observer.observe(videoRef.current);

    return () => {
      observer.disconnect();
    };
  }, [shouldLoadVideo]);

  return (
    <section className={`mt-12 ${className}`} ref={videoRef}>
      <MainCard title={title} variant="section">
        <div className="w-full">
          {shouldLoadVideo ? (
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ) : (
            <Skeleton
              className="w-full rounded-lg"
              style={{ paddingBottom: "56.25%", minHeight: "200px" }}
            />
          )}
        </div>
      </MainCard>
    </section>
  );
};

export default React.memo(YouTubeVideo);
