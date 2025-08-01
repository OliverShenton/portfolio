"use client";

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
export const slideVariants = {
  initial: (direction: "next" | "prev") => ({
    opacity: 0,
    y: direction === "next" ? 50 : -50,
  }),
  animate: { opacity: 1, y: 0 },
  exit: (direction: "next" | "prev") => ({
    opacity: 0,
    y: direction === "next" ? -50 : 50,
  }),
};
