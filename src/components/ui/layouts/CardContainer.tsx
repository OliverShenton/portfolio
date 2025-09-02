"use client";

import { motion } from "motion/react";

interface CardContainerProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: string;
  animated?: boolean;
}

const CardContainer = ({
  children,
  id,
  className,
  background = "bg-[var(--card-background)]",
  animated,
}: CardContainerProps) => {
  const variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.article
      id={id}
      className={`relative overflow-hidden border border-[var(--border-color)] hover:border-[--border-color-hover] rounded-xl w-full z-10 shadow-sm shadow-black/25 ${background} ${className}`}
      variants={animated ? variants : undefined}
      initial={animated ? "hidden" : undefined}
      whileInView={animated ? "show" : undefined}
      viewport={animated ? { once: true, amount: 0.4 } : undefined}
      transition={{ duration: 0.4, ease: "easeOut" }}>
      {children}
    </motion.article>
  );
};

export default CardContainer;
