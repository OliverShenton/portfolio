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
        className={`flex flex-col items-center justify-center px-4 md:px-6 py-10 md:py-14 lg:py-20 xl:py-24 gap-10 md:gap-14 lg:gap-20 max-w-[88rem] mx-auto ${
          fullScreen ? "md:min-h-[100dvh]" : ""
        }`}>
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;

// type SectionProps = {
//   id: string;
//   children: React.ReactNode;
//   sectionClassName?: string;
//   fullScreen?: boolean;
//   width?: string;
// };

// const Section = ({
//   id,
//   children,
//   sectionClassName,
//   fullScreen,
//   width = "max-w-7xl",
// }: SectionProps) => {
//   return (
//     <section id={id} className={`relative ${sectionClassName}`}>
//       <div
//         className={`w-full h-full flex flex-col items-center justify-center text-center tracking-widest space-y-8 mx-auto z-50 px-4 gap-10 py-30 ${
//           fullScreen ? "md:min-h-[100dvh]" : ""
//         } ${width}`}>
//         {children}
//       </div>
//     </section>
//   );
// };

// export default Section;
