import React from "react";

const SIZE_CLASS = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-28 h-28",
};

const MediaRow = ({
  imageSrc,
  imageAlt = "",
  size = "md",
  className = "",
  mediaClassName = "",
  imageClassName = "",
  imageLoading,
  imageDecoding,
  imageFetchPriority,
  imageWidth,
  imageHeight,
  contentClassName = "",
  fallback = null,
  onImageError,
  children,
}) => {
  const sizeClass = SIZE_CLASS[size] ?? SIZE_CLASS.md;

  return (
    <div className={`flex flex-row gap-4 ${className}`.trim()}>
      <div
        className={`${sizeClass} shrink-0 overflow-hidden rounded-lg border border-black/10 bg-gray-100 ${mediaClassName}`.trim()}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            loading={imageLoading}
            decoding={imageDecoding}
            fetchPriority={imageFetchPriority}
            width={imageWidth}
            height={imageHeight}
            className={`h-full w-full object-cover ${imageClassName}`.trim()}
            onError={onImageError}
          />
        ) : (
          fallback
        )}
      </div>

      <div className={`min-w-0 flex-1 ${contentClassName}`.trim()}>
        {children}
      </div>
    </div>
  );
};

export default React.memo(MediaRow);

