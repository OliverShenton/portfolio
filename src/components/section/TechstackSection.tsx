import DotGrid from "../backgrounds/DotGrid";
import SectionContainer from "../global/SectionContainer";
import SectionTitle from "../global/SectionTitle";
import TechstackGrid from "../techstack/TechstackGrid";

const TechstackSection = () => {
  return (
    <SectionContainer id="techstack-section" relative>
      <DotGrid />
      <SectionTitle title="How I Code" subtitle="What powers my work" color="indigo" />
      <TechstackGrid />
    </SectionContainer>
  );
};

export default TechstackSection;
