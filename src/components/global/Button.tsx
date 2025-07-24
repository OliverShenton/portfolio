import { easeInOut, motion } from "motion/react";

import { VariantLabels, TargetAndTransition, Transition } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  target?: string;
  className?: string;
  whileHover?: VariantLabels | TargetAndTransition;
  transition?: object;
};

const genericClass = "flex items-center justify-center w-full gap-2 px-6 py-3 rounded-xl";

export const LinkButton = ({
  children,
  href,
  target,
  className,
  whileHover = { scale: 1.05 },
  transition = { duration: 0.2, easeInOut },
}: ButtonProps) => {
  return (
    <motion.a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      role="button"
      className={`${genericClass} ${className}`}
      whileHover={whileHover}
      transition={transition}>
      {children}
    </motion.a>
  );
};
