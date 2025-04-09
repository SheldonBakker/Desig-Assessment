import React, { memo, useCallback } from "react";
import useResponsive from "../../hooks/useResponsive";
import { instagramPosts, INSTAGRAM_URL } from "../../constants/instagramData";
import SectionHeading from "../common/SectionHeading";
import MediaItem from "../common/MediaItem";

const Instagram: React.FC = () => {
  const { isMobile } = useResponsive();
  const [videoPost, ...imagesPosts] = instagramPosts;

  const getPostUrl = useCallback(
    (handle: string) =>
      handle ? `https://www.instagram.com/${handle}/` : INSTAGRAM_URL,
    []
  );

  // Render individual MediaItem component with consistent props
  const renderMediaItem = (
    post: (typeof instagramPosts)[0],
    customClass = "",
    aspectRatio = ""
  ) => (
    <MediaItem
      key={post.id}
      src={post.src}
      alt={post.alt}
      type={post.type}
      link={getPostUrl(post.handle)}
      className={`shadow-sm overflow-hidden ${customClass}`}
      aspectRatio={aspectRatio}
    />
  );

  return (
    <div
      className={`container mx-auto px-4 md:px-30 max-w-7xl ${
        isMobile ? "mb-[40px]" : "mb-[60px]"
      }`}
    >
      <SectionHeading
        title="What's happening on Instagram"
        subtitle="Don't miss out on the latest news and updates from Under Armour."
      />

      {/* Mobile layout */}
      <div className="block md:hidden flex flex-col space-y-2">
        {/* Video container */}
        <div className="w-full relative overflow-hidden p-0">
          {renderMediaItem(videoPost, "w-full", "auto")}
        </div>

        {/* Images grid */}
        <div className="grid grid-cols-2 gap-2 w-full">
          {imagesPosts.map((post) =>
            renderMediaItem(post, "w-full h-full", "h-[140px]")
          )}
        </div>
      </div>

      {/* Desktop layout */}
      <div
        className="hidden md:grid md:grid-cols-2 md:gap-4 w-full"
        style={{ height: "300px" }}
      >
        {/* Main video - left side */}
        <div className="h-full w-full overflow-hidden">
          {renderMediaItem(videoPost, "h-full")}
        </div>

        {/* Images grid - right side */}
        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full w-full">
          {imagesPosts.map((post) => renderMediaItem(post))}
        </div>
      </div>
    </div>
  );
};

export default memo(Instagram);
