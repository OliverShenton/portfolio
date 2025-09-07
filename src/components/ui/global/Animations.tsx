"use client";

import { Variants } from "motion";
import { motion, useReducedMotion, MotionConfig } from "motion/react";

// Build variants using the user's reduced-motion setting.
export function useMotionVariants() {
  const prefersReduced = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: prefersReduced ? 20 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const slideVariants: Variants = {
    initial: (direction: "next" | "prev") => ({
      opacity: 0,
      x: direction === "next" ? (prefersReduced ? -20 : -80) : prefersReduced ? 20 : 80,
      filter: "blur(4px)",
      pointerEvents: "none",
    }),
    animate: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      pointerEvents: "auto",
      transition: {
        duration: prefersReduced ? 0.2 : 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: (direction: "next" | "prev") => ({
      opacity: 0,
      x: direction === "next" ? (prefersReduced ? 20 : 80) : prefersReduced ? -20 : -80,
      filter: "blur(4px)",
      pointerEvents: "none",
      transition: {
        duration: prefersReduced ? 0.2 : 0.6,
        ease: [0.4, 0, 1, 1],
      },
    }),
  };

  return { containerVariants, itemVariants, slideVariants };
}

// Usage inside a component
export default function Hero({ direction }: { direction: "next" | "prev" }) {
  const { containerVariants, itemVariants, slideVariants } = useMotionVariants();

  return (
    <MotionConfig reducedMotion="user">
      <motion.ul variants={containerVariants} initial="hidden" animate="visible">
        <motion.li variants={itemVariants}>Item</motion.li>
      </motion.ul>

      {/* For directional slides, remember to pass `custom` */}
      <motion.div
        variants={slideVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        custom={direction}>
        Slide
      </motion.div>
    </MotionConfig>
  );
}
