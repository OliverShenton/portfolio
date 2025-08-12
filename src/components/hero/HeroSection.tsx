"use client";

import { heroTextData } from "@/data/HeroData";
import SectionContainer from "../global/SectionContainer";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import HeroSlides from "./HeroSlides";
import HeroBackground from "./HeroBackground";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Button } from "../global/Button";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const slideCount = 3;

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideCount);
    setDirection("next");
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
    setDirection("prev");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 10000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const { mainText, subText, textColor } = heroTextData[currentSlide];

  return (
    <SectionContainer id="hero" fullScreen relative>
      {/* Animated background */}
      <HeroBackground />

      {/* Hero slides */}
      <HeroSlides
        mainText={mainText}
        subText={subText}
        textColor={textColor}
        direction={direction}
      />

      {/* Dots - Slide indicators */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center gap-2">
        {heroTextData.map((_, i) => (
          <motion.div
            key={i}
            onClick={() => setCurrentSlide(i)}
            animate={{
              width: currentSlide === i ? 12 : 8,
              height: currentSlide === i ? 12 : 8,
              backgroundColor: currentSlide === i ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.3)",
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="rounded-full cursor-pointer"
          />
        ))}
      </div>

      {/* Arrow buttons */}
      <motion.div
        className="flex flex-col gap-4 text-5xl absolute bottom-12 right-12 z-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}>
        <motion.div
          whileHover={{
            rotate: [0, -10, 10, -8, 8, -5, 5, 0],
            transition: { duration: 1, ease: "easeInOut" },
          }}>
          <Button onClick={handlePrevSlide} variant="hero-arrow-button" ariaLabel="Previous slide">
            <FaArrowLeft />
          </Button>
        </motion.div>
        <motion.div
          whileHover={{
            rotate: [0, -10, 10, -8, 8, -5, 5, 0],
            transition: { duration: 1, ease: "easeInOut" },
          }}>
          <Button onClick={handleNextSlide} variant="hero-arrow-button" ariaLabel="Next slide">
            <FaArrowRight />
          </Button>
        </motion.div>
      </motion.div>
    </SectionContainer>
  );
};

export default HeroSection;
