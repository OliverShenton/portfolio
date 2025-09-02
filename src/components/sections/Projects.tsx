import { RouterButton } from "../ui/global/Button";
import SectionTitle from "../ui/global/SectionTitle";
import SectionContainer from "../ui/layouts/SectionContainer";
import ProjectGrid from "../ui/projects/ProjectGrid";

const Projects = () => {
  return (
    <SectionContainer id="projects" ariaLabelledBy="projects-heading" relative>
      {/* Title */}
      <SectionTitle
        title="My Best Projects"
        subtitle="Curated showcase with code and context"
        marker="amber"
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

export default Projects;
