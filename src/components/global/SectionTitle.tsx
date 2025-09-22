import { markerColor, SectionTitle as SectionTitleProps } from "@/schema/SectionSchema";

const SectionTitle = ({ title, subtitle, color }: SectionTitleProps) => {
  return (
    <div className="w-full flex items-center justify-start">
      <div className={`border-l-4 py-1 px-4 ${markerColor[color]}`}>
        {subtitle && <p className="text-[13px] sm:text-sm md:text-[15px] mb-4">{subtitle}</p>}
        <h2 className="text-[var(--text)] text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h2>
      </div>
    </div>
  );
};

export default SectionTitle;
