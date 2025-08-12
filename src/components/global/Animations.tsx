"use client";

import { Variants } from "motion";

export const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      duration: 0.5,
    },
  },
};

// Hero slide aniamtion
export const slideVariants: Variants = {
  initial: (direction: "next" | "prev") => ({
    opacity: 0,
    x: direction === "next" ? 80 : -80,
    filter: "blur(4px)",
    pointerEvents: "none",
  }),
  animate: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    pointerEvents: "auto",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: (direction: "next" | "prev") => ({
    opacity: 0,
    x: direction === "next" ? -80 : 80,
    filter: "blur(4px)",
    pointerEvents: "none",
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 1, 1],
    },
  }),
};

// Skill card animation
// export const skillCardVariants;
