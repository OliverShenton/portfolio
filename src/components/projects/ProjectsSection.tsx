import { projectData } from "@/data/ProjectData";
import SectionContainer from "../global/SectionContainer";
import ProjectCard from "./ProjectCard";
import { RouterButton } from "../global/Button";
import SectionTitle from "../global/SectionTitle";

const ProjectsSection = () => {
  return (
    <SectionContainer id="projects" ariaLabelledBy="projects-heading" relative>
      {/* Background */}
      <div
        id="projects-background"
        className="absolute inset-0 bg-cover bg-center opacity-25 z-0"
      />

      {/* Title */}
      <SectionTitle
        title="Selected Projects"
        subtitle="Check out a curated selection showcasing my best work."
      />

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
        {projectData.slice(0, 4).map((project, index) => (
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

      {/* More projects button */}
      <RouterButton href="/projects" variant="secondary-button">
        More Projects
      </RouterButton>
    </SectionContainer>
  );
};

export default ProjectsSection;
