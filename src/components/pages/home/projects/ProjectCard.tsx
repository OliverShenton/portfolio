import type { ProjectCard as ProjectCardProps } from "@/schemas/ProjectSchema";
import { LinkButton, RouterButton } from "../../../ui/global/Button";
import { FaCode, FaInfo } from "react-icons/fa";
import Image from "next/image";

export const ProjectCard = ({ title, slug, cover, role, repo }: ProjectCardProps) => {
  return (
    <article className="relative overflow-hidden bg-[var(--card-background)] p-4 sm:p-6 md:p-8 rounded-xl shadow-sm shadow-black/50 border border-[var(--border-color)] hover:border-[var(--border-color-hover)] hover:shadow-md transition-all duration-300">
      <LinkButton href={`/projects/${encodeURIComponent(slug)}`}>
        <Image
          src={cover.src}
          alt={title}
          priority
          className="rounded-[10px] sm:rounded-[12px] md:rounded-[14px] lg:rounded-[16px]"
        />
      </LinkButton>
      <div className="flex items-center justify-between mt-4 gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[var(--text)]">
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
  );
};

export default ProjectCard;
