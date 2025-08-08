"use client";

import { techLogos } from "@/data/TechLogoData";
import Section from "../global/Section";
import SectionTitle from "../global/SectionTitle";
import Carousel from "./Carousel";

const About = () => {
  return (
    <Section id="about">
      <SectionTitle title="About Me" subtitle="Who I am, what I love, and why I build." />
      <div className="max-w-3xl">
        <p id="about-text" className="text-2xl text-center">
          Hello, and welcome to my portfolio. My name is Oliver Shenton and I am a frontend
          developer. I build modern, responsive websites, utilising React, Next.js, Tailwind, and
          Framer Motion - bringing clean design and smooth user experiences to life.
        </p>
      </div>
      <Carousel />
    </Section>
  );
};
export default About;
