"use client";

import { FaLink } from "react-icons/fa";
import { RouterButton } from "../global/Button";
import { motion } from "motion/react";

const iconStyle =
  "inline-block opacity-0 w-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:px-4";

const ProjectsMoreButton = () => {
  return (
    <motion.div>
      <RouterButton
        href="/projects"
        title="View more projects"
        variant="secondary"
        className="group">
        <span>More Projects</span>
        <span className={iconStyle}>
          <FaLink />
        </span>
      </RouterButton>
    </motion.div>
  );
};

export default ProjectsMoreButton;
