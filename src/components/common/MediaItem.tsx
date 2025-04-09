import React, { memo } from "react";

interface MediaItemProps {
  src: string;
  alt: string;
  type?: "image" | "video";
  link?: string;
  aspectRatio?: string;
  className?: string;
  hoverEffect?: boolean;
}

const MediaItem: React.FC<MediaItemProps> = ({
  src,
  alt,
  type = "image",
  link,
  aspectRatio = "aspect-square",
  className = "",
  hoverEffect = true,
}) => {
  // Base classes for the media container
  const containerClasses = `relative overflow-hidden ${
    aspectRatio !== "auto" ? aspectRatio : ""
  } ${className}`;

  // Classes for media elements
  const mediaClasses = `w-full ${
    aspectRatio !== "auto" ? "h-full" : ""
  } object-cover object-center ${
    hoverEffect
      ? "transition-transform duration-300 ease-in-out group-hover:scale-105"
      : ""
  }`;

  // Media element based on type
  const mediaElement =
    type === "video" ? (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className={mediaClasses}
        aria-label={alt}
      />
    ) : (
      <img src={src} alt={alt} className={mediaClasses} />
    );

  // Wrap with link if provided
  if (link) {
    return (
      <div className={containerClasses}>
        <a href={link} className="block w-full h-full group">
          {mediaElement}
        </a>
      </div>
    );
  }

  // Return just the media if no link
  return (
    <div className={containerClasses}>
      <div className="w-full h-full group">{mediaElement}</div>
    </div>
  );
};

export default memo(MediaItem);
