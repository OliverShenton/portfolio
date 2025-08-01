"use client";

import { motion } from "motion/react";
import Section from "../global/Section";
import SectionTitle from "../global/SectionTitle";
import Carousel from "./Carousel";

const About = () => {
  return (
    <Section id="about">
      <SectionTitle title="About Me" subtitle="Who I am, what I love, and why I build." />
      <Carousel />
      {/* <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen"> */}
      {/* Sticky Image */}
      {/* <div className="sticky top-0 h-screen flex items-center justify-center bg-neutral-900">
          <img src="/me.jpg" alt="Oli" className="rounded-full w-64 shadow-xl" />
        </div> */}

      {/* Scrollable Text Blocks */}
      {/* <div className="space-y-[80vh] px-6 py-32 text-neutral-300">
          <motion.section
            className="max-w-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-4">Hey, I’m Oli.</h2>
            <p className="text-xl">I build fast, beautiful interfaces with React.</p>
          </motion.section>

          <motion.section
            className="max-w-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-4">Design meets performance.</h2>
            <p className="text-xl">From animations to accessibility, I care about craft.</p>
          </motion.section>

          <motion.section
            className="max-w-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <h2 className="text-4xl font-bold mb-4">Let’s build something great.</h2>
            <p className="text-xl">I’m open to roles where UI matters deeply.</p>
          </motion.section>
        </div>
      </div> */}
    </Section>
  );
};
export default About;
