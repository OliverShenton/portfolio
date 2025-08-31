"use client";

import { motion } from "framer-motion";

type SkillCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  hoverShadowColor: string;
  hoverIconColor: string;
};

const hoverScale = "group-hover:scale-105 transition-transform duration-300";

const SkillCard = ({
  icon,
  title,
  description,
  hoverShadowColor,
  hoverIconColor,
}: SkillCardProps) => {
  return (
    <motion.article
      className={`border border-neutral-800 bg-neutral-900 overflow-hidden shadow-black shadow-[0px_3px_8px_rgba(0_0_0_0.24)] rounded-xl px-6 py-10 group text-center flex flex-col items-center ${hoverShadowColor} transition-shadow duration-300 h-full min-h-[231px]`}
      role="group"
      whileHover={{ scale: 1.01, y: -4 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}>
      <span
        className={`text-4xl text-center mb-6 ${hoverScale} ${hoverIconColor}`}
        aria-hidden="true">
        {icon}
      </span>
      <h3 className={`text-lg font-semibold tracking-tight mb-4 ${hoverScale}`}>{title}</h3>
      <p className={`text-sm text-neutral-300 leading-relaxed max-w-xs ${hoverScale}`}>
        {description}
      </p>
    </motion.article>
  );
};

export default SkillCard;
