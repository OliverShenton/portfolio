"use client";

import Section from "../global/Section";
import SkillCard from "./SkillCard";
import { SkillsData } from "../../data/SkillsData";
import SectionTitle from "../global/SectionTitle";
// import { motion } from "framer-motion";

const Skills = () => {
  return (
    <Section id="skills" width="max-w-5xl" sectionClassName="py-24">
      <SectionTitle title="Skills Overview" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 mt-12">
        {SkillsData.map((skill) => (
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
