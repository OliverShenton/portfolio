"use client";

import { motion } from "motion/react";
import { LinkButton } from "../global/Button";
import { HerofadeUpAnimation } from "../animations/Animations";

const HeroContent = () => {
  return (
    <motion.div
      className="z-10  pointer-events-none"
      initial="initial"
      animate="animate"
      transition={HerofadeUpAnimation.transition}
      variants={HerofadeUpAnimation}>
      <div className="text-center px-4 sm:px-6 lg:px-8 space-y-4 md:space-y-8 mb-8 md:mb-16">
        <h1 className="text-[var(--text)] text-3xl md:text-4xl lg:text-6xl font-bold tracking-widest leading-10 sm:leading-14 md:leading-18 lg:leading-22 mx-auto max-w-5xl ">
          Creating Interfaces <br /> with Elegance &amp; Precision
        </h1>
        <p className="text-[var(--secondary-text)] text-lg lg:text-xl leading-6 md:leading-8 lg:leading-10 max-w-3xl mx-auto">
          Hi, I&apos;m Oliver - a frontend developer focused on smooth, intuitive, and interactive
          web experiences.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full max-w-xl mx-auto">
        <LinkButton
          href="#projects-section"
          title="My Projects"
          target="_self"
          variant="primary"
          className="flex-1">
          Explore My Work
        </LinkButton>
        <LinkButton
          href="#contact-section"
          title="Contact me"
          target="_self"
          variant="secondary"
          className="flex-1">
          Let&apos;s Talk
        </LinkButton>
      </div>
    </motion.div>
  );
};

export default HeroContent;
