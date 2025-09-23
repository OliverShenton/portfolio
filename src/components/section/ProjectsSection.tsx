import SectionContainer from "../global/SectionContainer";
import SectionTitle from "../global/SectionTitle";
import ProjectGrid from "../projects/ProjectGrid";
import ProjectsMoreButton from "../projects/ProjectsMoreButton";

const ProjectsSection = () => {
  return (
    <SectionContainer id="projects-section">
      <SectionTitle
        title="Selected Projects"
        subtitle="Curated showcase with code and context"
        color="amber"
      />
      <ProjectGrid maxVisible={2} />
      <ProjectsMoreButton />
    </SectionContainer>
  );
};

export default ProjectsSection;
