type SectionProps = {
  id: string;
  children: React.ReactNode;
  sectionClassName?: string;
  fullScreen?: boolean;
  width?: string;
  gap?: string;
};

const Section = ({
  id,
  children,
  sectionClassName,
  fullScreen,
  width = "max-w-7xl",
  gap,
}: SectionProps) => {
  return (
    <section id={id} className={`relative ${sectionClassName}`}>
      <div
        className={`w-full h-full flex flex-col items-center justify-center text-center tracking-widest space-y-8 mx-auto z-10 p-4 ${gap} ${
          fullScreen ? "min-h-[100dvh]" : ""
        } ${width}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
