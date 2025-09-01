"use client";

import ProjectCard from "./ProjectCard";
import { projectData } from "../../../data/ProjectData";
import { motion } from "motion/react";
import {
  projectCardChildVariants,
  projectCardParentVariants,
} from "@/components/animations/StaggeredLoad";

const ProjectGrid = ({ slice }: { slice: number }) => {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 gap-8"
      variants={projectCardParentVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}>
      {projectData.slice(0, slice).map((p, idx) => (
        <motion.div key={idx} variants={projectCardChildVariants}>
          <ProjectCard
            title={p.title}
            slug={p.slug}
            cover={p.cover}
            role={p.role}
            repo={p.repo}
            backgroundColor={p.backgroundColor}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectGrid;
