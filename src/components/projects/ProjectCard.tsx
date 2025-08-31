import type { ProjectCard as ProjectCardProps } from "@/schemas/ProjectSchema";
import { LinkButton, RouterButton } from "../global/Button";
import { FaCode, FaInfo } from "react-icons/fa";
import Image from "next/image";

export const ProjectCard = ({ title, slug, cover, role, repo }: ProjectCardProps) => {
  return (
    <LinkButton href={`/projects/${encodeURIComponent(slug)}`}>
      <article className="relative overflow-hidden bg-[var(--card-background)] p-8 rounded-xl shadow-sm shadow-black border border-neutral-900 hover:border-neutral-700 hover:shadow-md transition-all duration-300">
        <Image src={cover.src} alt={title} priority className="rounded-xl" />
        <div className="flex items-center justify-between mt-4 border-b border-[var(--border-color)]">
          <div className="flex flex-col gap-2">
            <h3 className="text-base sm:text-lg md:text-2xl font-semibold text-[var(--text)]">
              {title}
            </h3>
            <p className="text-[var(--secondary-text)] text-sm">{role}</p>
          </div>
          <div className="flex items-center gap-4">
            <LinkButton href={repo} variant="project-card-button" target="_blank" title="Github">
              <FaCode />
            </LinkButton>
            <RouterButton
              href={`/projects/${encodeURIComponent(slug)}`}
              variant="project-card-button"
              title={`${title} details`}>
              <FaInfo />
            </RouterButton>
          </div>
        </div>
      </article>
    </LinkButton>
  );
};

export default ProjectCard;
