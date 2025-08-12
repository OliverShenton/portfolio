import SectionContainer from "@/components/global/SectionContainer";
import ProjectCard from "@/components/projects/ProjectCard";
import { projectData } from "@/data/ProjectData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oliver Shenton | All Projects",
  description:
    "A showcase of Oli's portfolio projects - sleek, high-performance web apps crafted with React, TypeScript, and thoughtful UI design.",
};

const ProjectsPage = () => {
  return (
    <SectionContainer id="projects-page">
      {/* Project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 pt-20">
        {projectData.map((project, index) => (
          <div key={project.id} className={`transition-app ${index % 2 !== 0 ? "md:pt-10" : ""}`}>
            <ProjectCard
              bgColor={project.bgColor}
              role={project.role}
              image={project.images[0]}
              title={project.title}
              github={project.github}
            />
          </div>
        ))}
      </div>
    </SectionContainer>
  );
};

export default ProjectsPage;
