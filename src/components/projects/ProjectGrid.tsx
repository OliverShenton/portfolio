"use client";

import ProjectCard from "./ProjectCard";
import { GetAllProjects } from "./ProjectHelper";

const projectData = GetAllProjects();

const ProjectGrid = ({ maxVisible }: { maxVisible: number }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {projectData.slice(0, maxVisible).map((p) => (
        <ProjectCard
          key={p.slug}
          title={p.title}
          slug={p.slug}
          cover={p.cover}
          role={p.role}
          repo={p.repo}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
