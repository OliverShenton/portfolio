"use client";

import { childVariants, parentVariants } from "@/components/animations/StaggeredLoad";
import { techData } from "@/data/TechstackData";
import { hoverColor, levelColor } from "@/schemas/TechstachSchema";
import { motion } from "motion/react";

const tagClass =
  "flex items-center px-3 sm:px-4 py-1 sm:py-2 border border-neutral-700 bg-[var(--card-background)] rounded-full sm:rounded-xl space-x-2 hover:brightness-110";

const spanClass = "text-[10px] sm:text-[12px]";

const Techstack = () => {
  return (
    <motion.div
      className="flex flex-wrap gap-4 md:gap-6 items-center justify-center"
      variants={parentVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}>
      {techData.map((t) => (
        <motion.div
          key={t.tech}
          className={`${tagClass} group`}
          variants={childVariants}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.2 }}>
          <div className="flex items-center space-x-2">
            <span className={`${spanClass} ${levelColor[t.level]} ${hoverColor[t.level]}`}>
              {t.level}
            </span>
            <span className={`${spanClass} ${levelColor[t.level]} ${hoverColor[t.level]}`}>•</span>
          </div>
          <span className="text-[12px] sm:text-sm md:text-base">{t.tech}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Techstack;
