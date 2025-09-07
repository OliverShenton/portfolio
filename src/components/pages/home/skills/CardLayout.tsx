import { skillsData } from "@/data/SkillsData";
import SkillCard from "./SkillCard";

const CardLayout = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 z-20">
      {skillsData.map((s) => (
        <SkillCard
          key={s.id}
          icon={s.icon}
          title={s.title}
          description={s.description}
          hoverShadowColor={s.hoverShadowColor}
          hoverIconColor={s.hoverIconColor}
        />
      ))}
    </div>
  );
};

export default CardLayout;
