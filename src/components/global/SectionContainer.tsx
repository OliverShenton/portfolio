type SectionContainerProps = {
  id: string;
  children: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  fullScreen?: boolean;
  relative?: boolean;
  className?: string;
};

const SectionContainer = ({
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
    </section>
  );
};

export default SectionContainer;
