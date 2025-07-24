"use client";

import { FaCode } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import ArrowScroll from "./ArrowScroll";
import { motion } from "motion/react";
import Section from "../global/Section";

const CTAButtonData = [
  {
    id: 1,
    text: "See My Work",
    icon: <FaCode />,
    href: "#projects",
    className:
      "bg-gradient-to-r from-yellow-600 to-orange-500 text-white shadow-lg hover:bg-gradient-to-br hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all",
  },
  {
    id: 2,
    text: "Get In Touch",
    icon: <IoIosContact />,
    href: "#contact",
    className:
      "border border-gray-500 text-gray-200 hover:border-white hover:text-white transition-colors",
  },
];

const Hero = () => {
  return (
    <>
      <Section id="hero" fullScreen width="max-w-5xl" sectionClassName="hero-section" gap="gap-4">
        <motion.h2
          className="text-gray-400 uppercase text-sm sm:text-base"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.25, duration: 0.75 }}>
          React Developer • UI/UX Designer • Frontend Architect
        </motion.h2>

        <span className="flex flex-wrap justify-center gap-2">
          {["Oliver", "", "Shenton"].map((word, wi) => (
            <span key={wi} className="flex">
              {[...word].map((char, ci) => (
                <motion.span
                  key={`${wi}-${ci}`}
                  className="font-extrabold text-6xl sm:text-7xl md:text-8xl tracking-[10px] bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.5 + (wi * 7 + ci) * 0.05,
                    duration: 1,
                    type: "spring",
                    mass: 1,
                    stiffness: 250,
                  }}>
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </span>

        <motion.div
          className="h-[1px] bg-gradient-to-r from-gray-600 to-transparent mx-auto"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "5rem", opacity: 1 }}
          transition={{ delay: 2, duration: 0.3, type: "spring", mass: 0.5, stiffness: 1000 }}
        />

        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.25, duration: 0.75 }}>
          {CTAButtonData.map((cta) => (
            <a
              key={cta.id}
              href={cta.href}
              className={`px-6 py-3 rounded-xl font-medium flex items-center gap-2 ${cta.className}`}>
              <span>{cta.icon}</span>
              <span>{cta.text}</span>
            </a>
          ))}
        </motion.div>
      </Section>
      <ArrowScroll />
    </>
  );
};

export default Hero;
