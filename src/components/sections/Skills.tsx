"use client";

import Section from "../ui/global/SectionContainer";
import SectionTitle from "../ui/global/SectionTitle";
import SkillCard from "../ui/skills/SkillCard";
import { skillsData } from "../ui/skills/SkillsData";

const Skills = () => {
  return (
    <Section id="skills">
      {/* Title */}
      <SectionTitle
        title="What I Do"
        subtitle="Core strengths and daily toolkit"
        marker="emerald"
      />
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 z-20">
        {skillsData.map((skill) => (
          <SkillCard
            key={skill.id}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
            hoverShadowColor={skill.hoverShadowColor}
            hoverIconColor={skill.hoverIconColor}
          />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
