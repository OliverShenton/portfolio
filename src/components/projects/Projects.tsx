import { ProjectData } from "@/data/ProjectData";
import Section from "../global/Section";
import MinimalProjectCard from "./MinimalProjectCard";

const Projects = () => {
  return (
    <Section id="projects" fullScreen width="full">
      <div className="bg-neutral-900 w-full h-full rounded-xl border border-amber-500">
        {ProjectData.map((project) => (
          <MinimalProjectCard key={project.id} title={project.title} image={project.images[0]} />
        ))}
      </div>
    </Section>
    // <Section id="projects" width="max-w-[96rem]">
    //   {/* Title */}
    //   <div className="flex items-center justify-between w-full">
    //     <SectionTitle title="What I've Built" />
    //     <div></div>
    //   </div>

    //   {/* Project grid */}
    //   <div className="grid grid-cols-3 gap-4 w-full h-full">
    //     {ProjectData.map((project) => (
    //       <MinimalProjectCard key={project.id} title={project.title} image={project.images[0]} />
    //     ))}
    //   </div>

    //   {/* More button */}
    // </Section>
  );
};

export default Projects;
