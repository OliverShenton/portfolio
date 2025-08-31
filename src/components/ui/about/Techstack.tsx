import { techData } from "@/data/TechstackData";
import { levelColor } from "@/schemas/TechstachSchema";
import { motion } from "motion/react";

const tagClass =
  "flex items-center px-3 py-1 border border-neutral-700 bg-[var(--card-background)] rounded-full space-x-2 hover:brightness-140";

const spanClass = "text-[10px] sm:text-[12px]";

const Techstack = () => {
  return (
    <div className="flex flex-wrap gap-4 md:gap-6 items-center justify-center">
      {techData.map((t) => (
        <motion.div
          key={t.tech}
          className={tagClass}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ duration: 0.2 }}>
          <span className={`${spanClass} ${levelColor[t.level]}`}>{t.level}</span>
          <span className={`${spanClass} ${levelColor[t.level]}`}>•</span>
          <span className="text-[12px] sm:text-sm md:text-base">{t.tech}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default Techstack;
