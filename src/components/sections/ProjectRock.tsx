import React, { memo } from "react";
import useResponsive from "../../hooks/useResponsive";
import Button from "../common/Button";
import { projectRockData } from "../../constants/projectRockData";

// Project Rock Component - Features different layouts for mobile and desktop views
const ProjectRock: React.FC = () => {
  const { isMobile } = useResponsive();
  const { title, subtitle, images, description, ctaText, ctaLink } =
    projectRockData;

  return (
    <section
      className={`container mx-auto ${
        isMobile ? "px-0 mb-[40px]" : "px-4 md:px-30 mb-[60px]"
      } max-w-7xl`}
    >
      {/* Main container with centered layout */}
      <div className="w-full h-full flex justify-center">
        {/* Desktop layout - Background image with text overlay on right side
            Hidden on mobile */}
        <div
          className={`w-full h-[400px] bg-cover bg-center bg-no-repeat md:flex object-contain relative mx-auto overflow-hidden ${
            isMobile ? "hidden" : ""
          }`}
          style={{
            backgroundImage: `url(${images.desktop})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          {/* Takes up space to push content to the right */}
          <div className="hidden md:block md:w-[100%]"></div>
          {/*Fixed width on right side of section */}
          <div className="hidden md:w-[35%] md:flex flex-col justify-center p-6 md:pr-4 md:pl-0 overflow-hidden">
            <div className="max-w-[90%]">
              <h3 className="font-plak-bold text-[16px] uppercase text-white mb-2 w-full overflow-hidden text-ellipsis">
                {subtitle}
              </h3>
              <h1 className="font-plak-condblack text-3xl md:text-4xl lg:text-5xl uppercase text-white mb-4 leading-tight tracking-tight w-full overflow-hidden">
                {title}
              </h1>
              <p className="text-sm text-gray-200 mb-6 w-full overflow-hidden text-ellipsis line-clamp-3">
                {description}
              </p>
              <div className="inline-block">
                <Button
                  variant="outline"
                  className="text-white self-start w-auto transition-all duration-300 hover:px-8"
                >
                  {ctaText}
                </Button>
              </div>
            </div>
          </div>
          {/* Right spacer Small padding/margin on the right for the text and button */}
          <div className="hidden md:block md:w-[10%]"></div>
        </div>

        {/* Mobile layout - Stacked design with image on top and text below
            Only visible on mobile devices */}
        <div className="md:hidden w-full flex flex-col items-center p-0">
          <div className="w-full p-0 m-0">
            <img
              src={images.mobile}
              alt="Project Rock"
              className="w-full h-auto object-cover block"
            />
          </div>

          {/* Mobile text content with centered alignment and different styling */}
          <div className="px-4 pt-4 pb-6 w-full">
            <h3 className="font-['Neue Plak'] font-bold text-[16px] uppercase text-gray-600 mb-2 w-full">
              {subtitle}
            </h3>
            <h1 className="font-plak-condblack text-[48px] uppercase text-black mb-4 leading-tight tracking-tight w-full whitespace-pre-line">
              {title}
            </h1>
            <p className="font-['Neue Plak'] font-normal text-[14px] text-gray-700 mb-6 w-full">
              {description}
            </p>
            <div className="w-full">
              <Button
                href={ctaLink}
                className="w-full block text-center transition-all duration-300 hover:scale-x-105 transform-gpu px-4 py-3 max-w-none font-['Neue Plak'] font-normal text-[14px]"
              >
                {ctaText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(ProjectRock);
