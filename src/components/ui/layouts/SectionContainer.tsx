import type { SectionContainer as SectionContainerProps } from "@/schemas/SectionSchema";
import Hr from "../global/Hr";

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
      <Hr opaque />
      <div
        className={`flex flex-col items-center justify-center px-4 md:px-6 py-20 xl:py-32 gap-8 md:gap-12 lg:gap-20 max-w-[88rem] mx-auto ${
          fullScreen ? "min-h-[100dvh]" : ""
        } ${className}`}>
        {children}
      </div>
      <Hr opaque />
    </section>
  );
};

export default SectionContainer;
