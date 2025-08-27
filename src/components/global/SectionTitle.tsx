type SectionTitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

const SectionTitle = ({ title, subtitle, className = "" }: SectionTitleProps) => {
  return (
    <div
      className={`w-full flex items-center justify-center text-center gap-8 sm:gap-14 md:gap-20 ${className}`}>
      <div className="border-l border border-[var(--highlight)] w-8 h-0" />
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-relaxed mb-4 md:mb-6 lg:mb-8 text-[var(--text)]">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl">{subtitle}</p>
        )}
      </div>
      <div className="border-r border border-[var(--highlight)] w-8 h-0" />
    </div>
  );
};

export default SectionTitle;
