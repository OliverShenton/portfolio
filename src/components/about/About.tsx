"use client";

// import { AboutData } from "@/data/AboutData";
import Section from "../global/SectionContainer";
import SectionTitle from "../global/SectionTitle";

const About = () => {
  return (
    <Section id="about" relative>
      {/* <div className="flex flex-col md:flex-row">
        <div className="absolute flex-1 bg-[#12161d] flex flex-col gap-6 items-center justify-center text-center p-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[var(--text)]">
            About Me
          </h3>
          <p id="about-text" className="text-xl text-center leading-relaxed">
            Hello, and welcome to my portfolio. My name is Oliver Shenton and I am a frontend
            developer. I build modern, responsive websites, utilising React, Next.js, Tailwind, and
            Framer Motion - bringing clean design and smooth user experiences to life.
          </p>
        </div>
        <div className="absolute flex-1 bg-[#12161d] flex flex-col gap-6 items-center justify-center text-center p-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[var(--text)] p-4">
            My Journey
          </h3>
          <p id="about-text" className="text-2xl text-center leading-relaxed">
            Hello, and welcome to my portfolio. My name is Oliver Shenton and I am a frontend
            developer. I build modern, responsive websites, utilising React, Next.js, Tailwind, and
            Framer Motion - bringing clean design and smooth user experiences to life.
          </p>
        </div>
        <div className="absolute flex-1 bg-[#12161d] flex flex-col gap-6 items-center justify-center text-center p-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[var(--text)] p-4">
            Tech Stack
          </h3>
          <p id="about-text" className="text-2xl text-center leading-relaxed">
            Hello, and welcome to my portfolio. My name is Oliver Shenton and I am a frontend
            developer. I build modern, responsive websites, utilising React, Next.js, Tailwind, and
            Framer Motion - bringing clean design and smooth user experiences to life.
          </p>
        </div>
      </div> */}
      <SectionTitle
        title="About Me"
        subtitle="Who I am, what I love, and why I build."
        className="tracking-wide"
      />
      <div className="max-w-3xl">
        <p id="about-text" className="text-xl lg:text-2xl text-center leading-relaxed">
          Hello, and welcome to my portfolio. My name is Oliver Shenton and I am a frontend
          developer. I build modern, responsive websites, utilising React, Next.js, Tailwind, and
          Framer Motion - bringing clean design and smooth user experiences to life.
        </p>
      </div>
    </Section>
  );
};
export default About;
