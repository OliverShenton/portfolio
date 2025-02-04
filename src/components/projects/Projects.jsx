import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../../data/projects";

export default function Projects() {
  return (
    <div>
      <div className="flex flex-wrap justify-center gap-6">
        {PROJECTS.map((item, index) => (
          <ProjectCard
            key={item.id}
            index={index}
            image={item.image}
            header={item.name}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}
