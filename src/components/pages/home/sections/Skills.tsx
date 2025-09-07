import SectionTitle from "../../../ui/global/SectionTitle";
import SectionContainer from "../../../ui/layouts/SectionContainer";
import Techstack from "../skills/Techstack";

const Skills = () => {
  return (
    <SectionContainer id="skills">
      {/* Title */}
      <SectionTitle title="How I Code" subtitle="What powers my work" marker="indigo" />

      {/* Filter for techstack */}
      {/* <Filter /> */}

      {/* Techstack */}
      <Techstack />

      {/* Skill cards */}
      {/* <CardLayout /> */}
    </SectionContainer>
  );
};

export default Skills;
