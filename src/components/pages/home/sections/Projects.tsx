import SectionTitle from "../../../ui/global/SectionTitle";
import SectionContainer from "../../../ui/layouts/SectionContainer";
import MoreButton from "../projects/MoreButton";
import ProjectGrid from "../projects/ProjectGrid";

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
      <MoreButton />
    </SectionContainer>
  );
};

export default Projects;
