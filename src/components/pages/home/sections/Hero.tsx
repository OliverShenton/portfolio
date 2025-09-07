"use client";

import { motion } from "motion/react";
import Background from "../hero/Background";
import HeroSlides from "../hero/HeroSlides";
import { heroTextData } from "@/data/HeroData";
import { useEffect, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
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

  const { mainText, subText, textColor } = heroTextData[currentSlide];

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden z-30 px-4 md:px-6 py-24 xl:py-32">
      {/* Background */}
      <Background />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 space-y-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        {/* Dots - Slide indicators */}
        <div className="flex items-center gap-2 justify-center">
          {heroTextData.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setCurrentSlide(i)}
              type="button"
              animate={{
                width: currentSlide === i ? 12 : 8,
                height: currentSlide === i ? 12 : 8,
                backgroundColor:
                  currentSlide === i ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.3)",
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
        {/* Hero Slides */}
        <HeroSlides
          mainText={mainText}
          subText={subText}
          textColor={textColor}
          direction={direction}
        />
        {/* Arrow buttons */}
        <div className="flex items-center justify-center space-x-4 text-3xl md:text-4xl lg:text-5xl">
          <button
            onClick={handlePrevSlide}
            className="cursor-pointer hover:text-amber-500 transition-colors duration-100 min-h-[44px] min-w-[44px]">
            <MdKeyboardArrowLeft />
          </button>
          <button
            onClick={handleNextSlide}
            className="cursor-pointer hover:text-amber-500 transition-colors duration-100 min-h-[44px] min-w-[44px]">
            <MdKeyboardArrowRight />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
