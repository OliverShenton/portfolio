"use client";

import { aboutFacts, aboutTechData } from "@/data/aboutData";
import CardContainer from "../global/CardContainer";
import { LinkButton } from "../global/Button";
import { GoArrowUpRight } from "react-icons/go";
import RadialGradient from "../backgrounds/RadialGradient";

const iconStyle =
  "inline-block opacity-0 w-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:px-4";

const baseStyle =
  "rounded-xl border border-[var(--card-border)] hover:border-[var(--card-border-hover)] p-8 transition-all duration-300";

const AboutText = () => {
  return (
    <div className="space-y-4">
      <div className={`${baseStyle} relative space-y-8`}>
        <RadialGradient />
        <p className=" text-lg sm:text-xl md:text-2xl tracking-wide leading-10">
          Welcome to my personal portfolio. A curated showcase of my skills as a frontend developer
          and projects that have got me to where I am today.
        </p>
        <div className="flex flex-wrap gap-4">
          {aboutTechData.map((a) => (
            <CardContainer key={a.text} className="flex gap-2 px-4 py-2 items-center group">
              <span className={a.color}>{a.icon}</span>
              <span className={`text-[12px] sm:text-[13px] md:text-sm ${a.color}`}>{a.text}</span>
            </CardContainer>
          ))}
        </div>
        <LinkButton
          href="https://github.com/OliverShenton/cv/blob/main/Oliver%20Shenton.pdf"
          title="CV"
          variant="primary"
          className="w-fit group text-sm">
          <span>View my CV!</span>
          <span className={iconStyle}>
            <GoArrowUpRight />
          </span>
        </LinkButton>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        {aboutFacts.map((a) => (
          <div key={a.label} className={`${baseStyle} flex items-center flex-1 gap-4`}>
            <div className="text-lg sm:text-xl md:text-2xl border border-[var(--card-border)] bg-indigo-500/50 p-4 rounded-full">
              {a.icon}
            </div>
            <div>
              <h3 className="text-[12px] sm:text-[13px] md:text-sm text-[var(--secondary-text)]">
                {a.label}
              </h3>
              <p className="text-lg sm:text-xl md:text-2xl">{a.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`${baseStyle} bg-gradient-to-r from-indigo-500/10 via-transparent to-indigo-500/30`}>
        <p>Principles</p>
        <p className="text-sm text-[var(--secondary-text)]">
          Ship small, polish relentlessly, accessibility always, document everything, and leave the
          code kinder than when you found it.
        </p>
      </div>
    </div>
  );
};

export default AboutText;
