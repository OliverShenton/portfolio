import ProjectCard from "./ProjectCard";
import { projectData } from "./ProjectData";

const ProjectGrid = ({ slice }: { slice: number }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
      {projectData.slice(0, slice).map((p, idx) => (
        <div key={idx} className={idx % 2 !== 0 ? "md:mt-20" : ""}>
          <ProjectCard
            title={p.title}
            slug={p.slug}
            cover={p.cover}
            role={p.role}
            repo={p.repo}
            backgroundColor={p.backgroundColor}
          />
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;
