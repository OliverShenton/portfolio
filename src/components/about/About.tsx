"use client";

import Section from "../global/SectionContainer";
import SectionTitle from "../global/SectionTitle";

const About = () => {
  return (
    <Section id="about" relative>
      <SectionTitle
        title="About Me"
        subtitle="Who I am, what I love, and why I build."
        className="tracking-wide"
      />
      <div className="max-w-3xl">
        <p id="about-text" className="text-2xl text-center leading-relaxed">
          Hello, and welcome to my portfolio. My name is Oliver Shenton and I am a frontend
          developer. I build modern, responsive websites, utilising React, Next.js, Tailwind, and
          Framer Motion - bringing clean design and smooth user experiences to life.
        </p>
      </div>
    </Section>
  );
};
export default About;
