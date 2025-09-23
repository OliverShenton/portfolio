"use client";

import { motion } from "motion/react";

interface CardContainerProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  // animated?: boolean;
}

const CardContainer = ({ id, children, className }: CardContainerProps) => {
  return (
    <motion.article
      id={id}
      className={`${className} relative overflow-hidden bg-[var(--card-background)] border border-[var(--card-border)] hover:border-[var(--card-border-hover)] transition-all duration-300 rounded-xl w-full z-10 shadow-sm shadow-black/50`}>
      {children}
    </motion.article>
  );
};

export default CardContainer;
