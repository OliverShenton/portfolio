import SectionContainer from "../global/SectionContainer";
import { RouterButton } from "../global/Button";
import SectionTitle from "../global/SectionTitle";
import ProjectGrid from "./ProjectGrid";

const ProjectsSection = () => {
  return (
    <SectionContainer id="projects" ariaLabelledBy="projects-heading" relative>
      {/* Title */}
      <SectionTitle
        title="My Best Projects"
        subtitle="Curated showcase with code and context"
        markerColor="text-amber-500 border-amber-500"
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
