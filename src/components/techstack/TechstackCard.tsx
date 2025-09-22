import { levelColor, TechItem } from "@/schema/TechstackSchema";

const TechstackCard = ({ tech, level }: TechItem) => {
  return (
    <article className="flex items-center justify-between bg-[#171717] border border-[#404040] hover:border-[var(--card-border-hover)] px-4 py-3 rounded-xl z-10">
      <p className="text-[13px]">{tech}</p>
      <p className={`${levelColor[level]} px-2 rounded-full text-[10px]`}>{level}</p>
    </article>
  );
};

export default TechstackCard;
