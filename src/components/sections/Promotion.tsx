import React, { memo } from "react";
import useResponsive from "../../hooks/useResponsive";
import { promotionsData } from "../../constants/promotionData";
import SectionHeading from "../common/SectionHeading";
import MediaItem from "../common/MediaItem";

const Promotion: React.FC = () => {
  const { isMobile } = useResponsive();
  return (
    <div
      className={`container mx-auto px-4 md:px-30 max-w-7xl ${
        isMobile ? "mb-[40px]" : "mb-[60px]"
      }`}
    >
      <SectionHeading
        title="Discover our latest promotions"
        subtitle="Get the best deals on the best gear."
      />

      {/* Mobile: Horizontal scrolling container */}
      <div className="block sm:hidden overflow-x-auto pb-4 -mx-4 px-4">
        <div className="flex space-x-2 w-max">
          {promotionsData.map((promo, index) => (
            <div key={index} className="flex-shrink-0 w-[280px]">
              <MediaItem
                src={promo.image}
                alt={`Promo ${index + 1}`}
                link={promo.link}
                aspectRatio="aspect-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Grid layout */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {promotionsData.map((promo, index) => (
          <MediaItem
            key={index}
            src={promo.image}
            alt={`Promo ${index + 1}`}
            link={promo.link}
            aspectRatio="aspect-auto"
          />
        ))}
      </div>
    </div>
  );
};

export default memo(Promotion);
