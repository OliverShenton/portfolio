"use client";

import { Variants } from "motion";
import { motion } from "motion/react";

// Stagger children
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const StaggeredFadeIn = () => {
  return <motion.div></motion.div>;
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
