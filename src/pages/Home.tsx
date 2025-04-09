import React from 'react';
import useResponsive from '../hooks/useResponsive';
import HeroSection from '../components/sections/HeroSection';
import BestGear from '../components/sections/BestGear';
import ProjectRock from '../components/sections/ProjectRock';
import Promotion from '../components/sections/Promotion';
import Instagram from '../components/sections/Instagram';

const Home: React.FC = () => {
  const { isMobile } = useResponsive();
  return (
    <>
      <div>
        <HeroSection />
      </div>
      <div className={`${isMobile ? 'mt-[40px]' : 'mt-[60px]'}`}>
        <BestGear />
      </div>
      <div className={`${isMobile ? 'mt-[40px]' : 'mt-[60px]'}`}>
        <ProjectRock />
      </div>
      <div className={`${isMobile ? 'mt-[40px]' : 'mt-[60px]'}`}>
        <Promotion />
      </div>
      <div className={`${isMobile ? 'mt-[40px]' : 'mt-[60px]'}`}>
        <Instagram />
      </div>
    </>
  );
};

export default Home; 