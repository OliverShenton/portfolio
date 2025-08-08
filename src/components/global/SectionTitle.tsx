type SectionTitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

const SectionTitle = ({ title, subtitle, className = "" }: SectionTitleProps) => {
  return (
    <div
      className={`w-full flex items-center justify-center text-center gap-8 sm:gap-14 md:gap-20 ${className}`}>
      <div className="border-l border border-[var(--tertiary-highlight)] w-8 h-0" />
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[var(--text)]">
          {title}
        </h2>
        {subtitle && <p className="text-base sm:text-lg text-gray-300 max-w-prose">{subtitle}</p>}
      </div>
      <div className="border-r border border-[var(--tertiary-highlight)]  w-8 h-0" />
    </div>
  );
};

export default SectionTitle;
