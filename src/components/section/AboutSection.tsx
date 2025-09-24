import AboutSplitScreen from "../about/AboutSplitScreen";
import AboutText from "../about/AboutText";
import SectionContainer from "../global/SectionContainer";
import SectionTitle from "../global/SectionTitle";

const AboutSection = () => {
  return (
    <SectionContainer id="about-section">
      <SectionTitle title="About Me" subtitle="A short story" color="rose" />
      <AboutSplitScreen left="" right={<AboutText />} />
    </SectionContainer>
  );
};

export default AboutSection;
