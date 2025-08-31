"use client";

import { markerColor, type SectionTitle } from "@/schemas/SectionSchema";
import { motion } from "motion/react";

const SectionTitle = ({ title, subtitle, marker }: SectionTitle) => {
  return (
    <motion.div
      className={`w-full flex items-start justify-start text-left gap-4 md:gap-8`}
      initial={{ x: -25, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ type: "spring", stiffness: 60, damping: 15 }}>
      <div className={`border-l-4 py-1 px-4 ${markerColor[marker]}`}>
        {subtitle && (
          <h3
            className={`text-[13px] sm:text-sm md:text-[15px] mb-4 md:mb-6 px-1 ${markerColor[marker]}`}>
            {subtitle}
          </h3>
        )}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-[var(--text)]">
          {title}
        </h2>
      </div>
    </motion.div>
  );
};

export default SectionTitle;
