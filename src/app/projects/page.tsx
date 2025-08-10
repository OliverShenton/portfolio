import SectionContainer from "@/components/global/SectionContainer";
import DarkVeil from "@/components/animated-backgrounds/DarkVeil";
import ProjectCard from "@/components/projects/ProjectCard";
import { projectData } from "@/data/ProjectData";
import ParticleBackground from "@/components/animated-backgrounds/ParticleBackground";

const ProjectsPage = () => {
  return (
    <SectionContainer id="projects-page" relative>
      {/* Backgrounds */}
      <ParticleBackground zIndex="z-10" />
      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
        <DarkVeil />
      </div>

      {/* Title & filter */}

      {/* Project cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 z-20 pt-20">
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
