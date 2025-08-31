"use client";

import Section from "../global/SectionContainer";
import SkillCard from "./SkillCard";
import { skillsData } from "./SkillsData";
import SectionTitle from "../global/SectionTitle";

const SkillsSection = () => {
  return (
    <Section id="skills">
      <SectionTitle
        title="What I Do"
        subtitle="Core strengths and daily toolkit"
        markerColor="text-emerald-500 border-emerald-500"
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

export default SkillsSection;
