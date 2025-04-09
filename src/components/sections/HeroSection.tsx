import React, { useRef, memo } from 'react';
import useResponsive from '../../hooks/useResponsive';
import Button from '../common/Button';
import { heroData } from '../../constants/heroData';

const HeroSection: React.FC = () => {
  const { isMobile } = useResponsive();
  const videoRef = useRef<HTMLVideoElement>(null);
  const { title, description, ctaText, ctaLink, videos } = heroData;

  return (
    <section className={`w-full pt-[80px] ${isMobile ? 'mb-[40px]' : 'mb-[60px]'}`}>
      {/* Main container with centered layout */}
      <div className="w-full h-full">
        {/* Desktop layout - Background video with text overlay on right side 
            Only visible on desktop devices */}
        <div className="hidden md:flex w-full h-auto relative overflow-hidden">
          <div className="w-full h-auto">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-auto object-cover"
              src={videos.desktop}
            />
          </div>
          
          {/* Desktop text overlay on right side */}
          <div className="absolute top-0 right-0 w-[45%] h-full flex items-center">
            <div className="w-full h-full px-[5%] py-[4%] flex flex-col justify-center">
              <h1 className="font-plak-condblack text-[min(5.5vw,105px)] leading-[1.05] mb-[3%] uppercase text-black whitespace-pre-line tracking-tight">
                {title.desktop}
              </h1>
              <p className="font-['Neue Plak'] font-normal text-[12px] mb-[5%] text-black max-w-[90%] whitespace-pre-line">
                {description}
              </p>
              <div className="inline-block">
                <Button 
                  href={ctaLink}
                  className="self-start hover:px-8 transition-all duration-300"
                >
                  {ctaText}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile layout - Stacked design with video on top and text below
            Only visible on mobile devices */}
        <div className="md:hidden w-full flex flex-col items-center">
          <div className="w-full p-0 m-0">
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-auto object-cover block"
              src={videos.mobile}
            />
          </div>
          
          {/* Mobile text content with centered alignment and different styling */}
          <div className="px-4 pt-4 pb-6 w-full">
            <h1 className="font-plak-condblack text-[48px] uppercase text-black mb-4 leading-tight tracking-tight w-full whitespace-pre-line">
              {title.mobile}
            </h1>
            <p className="font-['Neue Plak'] font-normal text-[14px] text-gray-700 mb-6 w-full">
              Advanced tech, superior comfort and all performance is what our latest UA gear is all about. Built to go further, push hard and break your boundaries.
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

export default memo(HeroSection); 