"use client";

import SectionTitle from "../../../ui/global/SectionTitle";
import SectionContainer from "../../../ui/layouts/SectionContainer";
import Details from "../about/Details";

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
