import Section from "../global/Section";
import SectionTitle from "../global/SectionTitle";
import { projectData } from "@/data/ProjectData";
import MinimalProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <Section id="projects">
      <>
        <SectionTitle title="Projects" subtitle="Check out my work!" />
        {/* <div className="grid grid-cols-2 gap-8">
          {projectData.slice(0, 4).map((project) => (
            <MinimalProjectCard
              key={project.id}
              image={project.images[0]}
              title={project.title}
              github={project.github}
            />
          ))}
        </div> */}
      </>
    </Section>
  );
};

export default Projects;
