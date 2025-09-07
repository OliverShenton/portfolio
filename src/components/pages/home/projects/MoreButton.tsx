"use client";

import { FaLink } from "react-icons/fa";
import { RouterButton } from "../../../ui/global/Button";
import { motion } from "motion/react";
import { projectCardChildVariants } from "@/components/animations/StaggeredLoad";

const arrowStyle =
  "inline-block opacity-0 w-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:ml-2";

const MoreButton = () => {
  return (
    <motion.div
      className="w-full"
      variants={projectCardChildVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}>
      <RouterButton href="/projects" variant="secondary-button" className="group">
        <span>More Projects</span>
        <span className={arrowStyle}>
          <FaLink />
        </span>
      </RouterButton>
    </motion.div>
  );
};

export default MoreButton;
