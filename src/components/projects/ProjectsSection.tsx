import SectionContainer from "../global/SectionContainer";
import { RouterButton } from "../global/Button";
import SectionTitle from "../global/SectionTitle";
import ProjectGrid from "./ProjectGrid";

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
      <ProjectGrid slice={4} />

      {/* More projects button */}
      <RouterButton href="/projects" variant="secondary-button">
        More Projects
      </RouterButton>
    </SectionContainer>
  );
};

export default ProjectsSection;
