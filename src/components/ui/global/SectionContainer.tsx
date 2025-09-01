import type { SectionContainer as SectionContainerProps } from "@/schemas/SectionSchema";
import { motion } from "motion/react";
import Hr from "./Hr";

// Section setup
export const SectionContainer = ({
  id,
  children,
  ariaLabel,
  ariaLabelledBy,
  fullScreen,
  relative,
  className,
}: SectionContainerProps) => {
  return (
    <section
      id={`${id}-section`}
      role="region"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={relative ? "relative" : ""}>
      <div
        className={`flex flex-col items-center justify-center px-4 md:px-6 py-20 xl:py-32 gap-10 md:gap-14 lg:gap-24 max-w-[88rem] mx-auto ${
          fullScreen ? "min-h-[100dvh]" : ""
        } ${className}`}>
        {children}
      </div>
      <Hr opaque />
    </section>
  );
};

export default SectionContainer;
