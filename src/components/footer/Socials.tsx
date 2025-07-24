"use client";

import { SocialsData } from "@/data/SocialData";
import { motion } from "motion/react";

const Socials = () => {
  return (
    <nav className="flex items-center gap-4">
      {SocialsData.map((link) => (
        <motion.a
          key={link.id}
          href={link.href}
          title={link.title}
          rel="noopener noreferrer"
          target="_blank"
          layout
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`border p-2 text-2xl ${link.hoverColor} hover:text-[var(--text)] transition-colors duration-300 rounded-full`}>
          {link.icon}
        </motion.a>
      ))}
    </nav>
  );
};

export default Socials;
