"use client";

import { useEffect, useState } from "react";
import Section from "../global/Section";
import { heroTextData } from "@/data/HeroData";
import HeroSlides from "./HeroSlides";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Button } from "../global/Button";
import { motion } from "motion/react";

const Hero = () => {
  // States
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  // Slide count
  const slideCount = 3;

  // Previous slide handler
  const handlePrev = () => {
    setDirection("prev");
    setCurrentSlide((prev) => (prev - 1 + slideCount) % slideCount);
  };

  // Next slide handler
  const handleNext = () => {
    setDirection("next");
    setCurrentSlide((prev) => (prev + 1) % slideCount);
  };

  // Hero slides data
  const { mainText, subText, textColor } = heroTextData[currentSlide];

  // Timer for slide change
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 8000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <Section id="hero" fullScreen>
      {/* Hero slides component */}
      <HeroSlides
        mainText={mainText}
        subText={subText}
        textColor={textColor}
        direction={direction}
      />

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {heroTextData.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full ${currentSlide === idx ? "bg-white" : "bg-white/30"}`}
          />
        ))}
      </div>

      {/* Scroll arrows */}
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
          <Button onClick={handlePrev} variant="hero-arrow-button" ariaLabel="Previous slide">
            <FaArrowLeft />
          </Button>
        </motion.div>
        <motion.div
          whileHover={{
            rotate: [0, -10, 10, -8, 8, -5, 5, 0],
            transition: { duration: 1, ease: "easeInOut" },
          }}>
          <Button onClick={handleNext} variant="hero-arrow-button" ariaLabel="Next slide">
            <FaArrowRight />
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default Hero;
