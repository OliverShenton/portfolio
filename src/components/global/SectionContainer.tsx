type SectionContainerProps = {
  id: string;
  children: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  fullScreen?: boolean;
  relative?: boolean;
};

const SectionContainer = ({
  id,
  children,
  ariaLabel,
  ariaLabelledBy,
  fullScreen,
  relative,
}: SectionContainerProps) => {
  return (
    <section
      id={`${id}-section`}
      role="region"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={relative ? "relative" : ""}>
      <div
        className={`flex flex-col items-center justify-center px-4 md:px-6 py-10 md:py-14 lg:py-20 xl:py-28 gap-10 md:gap-14 lg:gap-20 max-w-[88rem] mx-auto ${
          fullScreen ? "md:min-h-[100dvh]" : ""
        }`}>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
