"use client";

import Section from "../global/SectionContainer";
import SkillCard from "./SkillCard";
import { skillsData } from "../../data/SkillsData";
import SectionTitle from "../global/SectionTitle";
// import Carousel from "../about/Carousel";
// import Hr from "../global/Hr";
// import { motion } from "framer-motion";

const SkillsSection = () => {
  return (
    <Section id="skills" relative>
      <SectionTitle
        title="Skills Overview"
        subtitle="A snapshot of my frontend expertise and technical toolkit."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 z-20">
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
      {/* <Carousel /> */}
    </Section>
  );
};

export default SkillsSection;
