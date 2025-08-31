"use client";

// import { AboutData } from "@/data/AboutData";
import Section from "../global/SectionContainer";
import SectionTitle from "../global/SectionTitle";
import { techData } from "./AboutData";

const About = () => {
  return (
    <Section id="about" relative>
      <SectionTitle
        title="About Me"
        subtitle="Who I am and what I value"
        markerColor="text-rose-500 border-rose-500"
      />
      <div className="max-w-3xl">
        <p id="about-text" className="text-xl text-center leading-relaxed">
          Hello, and welcome to my portfolio. My name is Oliver Shenton and I am a frontend
          developer. I build modern, responsive websites, utilising React, Next.js, Tailwind, and
          Framer Motion - bringing clean design and smooth user experiences to life.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 items-center">
        {techData.map((t, idx) => (
          <div
            key={idx}
            className="px-3 py-1 border border-neutral-700 bg-[var(--card-background)] rounded-full space-x-2">
            <span className="text-[10px] text-rose-500">{t.level}</span>
            <span className="text-[12px] text-rose-500">•</span>
            <span className="text-sm">{t.tech}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};
export default About;
