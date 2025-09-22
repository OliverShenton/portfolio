"use client";

import { useEffect, useState } from "react";
import DotGrid from "../backgrounds/DotGrid";
import SectionContainer from "../global/SectionContainer";
import { heroTextData } from "@/data/heroData";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const slideCount = heroTextData.length;

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
    setDirection("next");
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
    setDirection("prev");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextSlide();
    }, 8000);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  // const { mainText, subText, textColor } = heroTextData[currentSlide];

  return (
    <SectionContainer id="hero-section" fullScreen>
      <DotGrid />
    </SectionContainer>
  );
};

export default HeroSection;
