import { motion } from "motion/react";
import { LinkButton } from "../global/Button";

const HeroCTAs = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full max-w-xl mx-auto">
      <motion.div
        className="flex-1 shadow-black/20 hover:shadow-md transition-shadow duration-100"
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ duration: 0.1 }}>
        <LinkButton href="#projects-section" title="My Projects" target="_self" variant="primary">
          Explore My Work
        </LinkButton>
      </motion.div>
      <div className="flex-1">
        <LinkButton href="#contact-section" title="Contact me" target="_self" variant="secondary">
          Let&apos;s Talk
        </LinkButton>
      </div>
    </div>
  );
};

export default HeroCTAs;
