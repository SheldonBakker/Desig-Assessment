import React, { memo } from "react";
import useResponsive from "../../hooks/useResponsive";
import { categories } from "../../constants/categoryData";
import SectionHeading from "../common/SectionHeading";
import MediaItem from "../common/MediaItem";

// BestGear component
const BestGear: React.FC = () => {
  const { isMobile } = useResponsive();
  return (
    <div
      className={`container mx-auto px-4 md:px-30 max-w-7xl ${
        isMobile ? "mb-[40px]" : "mb-[60px]"
      }`}
    >
      <SectionHeading
        title="Our best gear"
        subtitle="Unlock your potential with the best UA Gear"
      />

      {/* Mobile: Horizontal scrolling container */}
      <div className="block sm:hidden overflow-x-auto pb-4 -mx-4 px-4">
        <div className="flex space-x-1 w-max">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group transition-all duration-300 ease-in-out hover:scale-[1.02] flex-shrink-0 w-[280px]"
            >
              <a href={category.link} className="flex flex-col items-start">
                <MediaItem
                  src={category.image}
                  alt={category.name}
                  aspectRatio="aspect-auto"
                  className="w-full mb-2"
                />
                <span className="font-plak font-semibold text-[14px] text-black underline transition-colors duration-300 group-hover:text-gray-500/80">
                  Shop Now
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Grid layout for the categories */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {categories.map((category) => (
          <div
            key={category.name}
            className="group transition-all duration-300 ease-in-out hover:scale-[1.02]"
          >
            <a href={category.link} className="flex flex-col items-start">
              <MediaItem
                src={category.image}
                alt={category.name}
                aspectRatio="aspect-auto"
                className="w-full mb-2"
              />
              <span className="font-plak font-semibold text-[14px] text-black underline transition-colors duration-300 group-hover:text-gray-500/80">
                Shop Now
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(BestGear);
