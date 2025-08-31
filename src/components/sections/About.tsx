"use client";

import Section from "../ui/global/SectionContainer";
import SectionTitle from "../ui/global/SectionTitle";
import Details from "../ui/about/Details";

const About = () => {
  return (
    <Section id="about" relative>
      {/* Title */}
      <SectionTitle title="About Me" subtitle="Who I am and what I value" marker="rose" />

      {/* Details */}
      <Details />
    </Section>
  );
};
export default About;
