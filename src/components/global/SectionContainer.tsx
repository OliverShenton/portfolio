import CustomHr from "./CustomHr";

interface SectionContainerProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  ariaLabelledBy?: string;
  fullScreen?: boolean;
  relative?: boolean;
}

const sectionStyle =
  "flex flex-col items-center justify-center max-w-[88rem] mx-auto px-4 md:px-6 py-20 xl:py-32 gap-8 md:gap-12 lg:gap-20";

const SectionContainer = ({
  id,
  children,
  className,
  ariaLabelledBy,
  fullScreen,
  relative,
}: SectionContainerProps) => {
  return (
    <section
      id={id}
      role="region"
      aria-labelledby={ariaLabelledBy}
      className={relative ? "relative" : "static"}>
      <CustomHr opaque />
      <div className={`${className} ${sectionStyle} ${fullScreen ? "min-h-[100dvh]" : ""} `}>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
