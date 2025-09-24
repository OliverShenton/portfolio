"use client";

import { motion } from "motion/react";
import { LinkButton } from "../global/Button";
import { HerofadeUpAnimation } from "../animations/Animations";
import HeroText from "./HeroText";
import HeroCTAs from "./HeroCTAs";

const HeroContent = () => {
  return (
    <motion.div
      className="z-10  pointer-events-none"
      initial="initial"
      animate="animate"
      transition={HerofadeUpAnimation.transition}
      variants={HerofadeUpAnimation}>
      <HeroText />
      <HeroCTAs />
    </motion.div>
  );
};

export default HeroContent;
