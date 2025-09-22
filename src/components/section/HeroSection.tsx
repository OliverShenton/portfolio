"use client";

import DotGrid from "../backgrounds/DotGrid";
import SectionContainer from "../global/SectionContainer";
import GlowingCircle from "../backgrounds/GlowingCircle";
import HeroContent from "../hero/HeroContent";

const HeroSection = () => {
  return (
    <SectionContainer id="hero-section" fullScreen relative>
      {/* Backgrounds */}
      <GlowingCircle />
      <DotGrid />

      {/* Content */}
      <HeroContent />
    </SectionContainer>
  );
};

export default HeroSection;
