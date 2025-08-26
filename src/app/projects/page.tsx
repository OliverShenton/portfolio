// "use client";

import SectionContainer from "@/components/global/SectionContainer";
// import SectionTitle from "@/components/global/SectionTitle";
import ProjectCard from "@/components/projects/ProjectCard";
// import ProjectFilter from "@/components/projects/ProjectFilter";
import { projectData } from "@/data/ProjectData";
import { Metadata } from "next";
// import { useState } from "react";

export const metadata: Metadata = {
  title: "Oliver Shenton | All Projects",
  description:
    "A showcase of Oli's portfolio projects - sleek, high-performance web apps crafted with React, TypeScript, and thoughtful UI design.",
};

const ProjectsPage = () => {
  // const [activeFilter, setActiveFilter] = useState("All");

  return (
    <SectionContainer id="projects-page" relative>
      {/* Background */}
      <div id="projects-background" className="absolute inset-0 bg-cover bg-center z-0 h-full" />

      {/* Title */}
      {/* <div className="flex items-center justify-between w-full pt-10">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-4 text-[var(--text)]">
            All Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-prose">
            Browse a collection of all my work - and filter through my professional projects, my
            personal projects, projects I have designed, and projects I have developed.
          </p>
        </div>
        <div className="flex-1 items-end justify-end">
          <ProjectFilter activeFilter={activeFilter} onChange={setActiveFilter} />
        </div>
      </div> */}
      {/* <SectionTitle
        title="All Projects"
        subtitle="Browse a collection of all my work - and filter through my professional projects, my personal projects, projects I have designed, and projects I have developed."
        className="pt-10"
      /> */}

      {/* Projects filter */}
      {/* <ProjectFilter activeFilter={activeFilter} onChange={setActiveFilter} /> */}

      {/* Project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 pt-20 -mt-10">
        {projectData.map((project, index) => (
          <div
            key={project.title}
            className={`transition-app ${index % 2 !== 0 ? "md:pt-10" : ""}`}>
            <ProjectCard
              backgroundColor={project.backgroundColor}
              role={project.role}
              cover={project.cover}
              title={project.title}
              slug={project.slug}
              repo={project.repo}
            />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default ProjectsPage;
