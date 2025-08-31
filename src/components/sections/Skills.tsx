"use client";

import Section from "../ui/global/SectionContainer";
import SectionTitle from "../ui/global/SectionTitle";
import Techstack from "../ui/skills/Techstack";

const Skills = () => {
  return (
    <Section id="skills">
      {/* Title */}
      <SectionTitle title="How I Code" subtitle="What powers my work" marker="indigo" />

      {/* Filter for techstack */}
      {/* <Filter /> */}

      {/* Techstack */}
      <Techstack />

      {/* Skill cards */}
      {/* <CardLayout /> */}
    </Section>
  );
};

export default Skills;
