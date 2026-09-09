import React, { useState, useEffect, useRef } from "react";
import MainCard from "./MainCard";
import Skeleton from "./Skeleton";

const YouTubeVideo = ({ videoId, title = "Video", className = "" }) => {
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef(null);

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
        rootMargin: "0px", 
        threshold: 0.1,
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
                src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
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