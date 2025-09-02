"use client";

import SectionTitle from "../ui/global/SectionTitle";
import Details from "../ui/about/Details";
import SectionContainer from "../ui/layouts/SectionContainer";

const About = () => {
  return (
    <SectionContainer id="about" relative>
      {/* Title */}
      <SectionTitle title="About Me" subtitle="Who I am and what I value" marker="rose" />

      {/* Details */}
      <Details />
    </SectionContainer>
  );
};
export default About;
