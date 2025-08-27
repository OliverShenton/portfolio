import type { ProjectCard as ProjectCardProps } from "@/schemas/ProjectSchema";
import { LinkButton, RouterButton } from "../global/Button";
import { FaCode, FaInfo } from "react-icons/fa";
import Image from "next/image";

export const ProjectCard = ({
  title,
  slug,
  cover,
  role,
  repo,
  backgroundColor,
}: ProjectCardProps) => {
  return (
    <article id="project-card" className="group">
      <div
        id={""}
        className="relative z-0 border border-neutral-800 bg-neutral-900 rounded-xl overflow-hidden group-hover:border-white/25 transition-all duration-300">
        <LinkButton href={`/projects/${encodeURIComponent(slug)}`}>
          {/* Background */}
          <div
            className="absolute z-10 h-full w-full opacity-10 group-hover:opacity-30 transition-transform duration-300"
            style={{
              backgroundImage: `radial-gradient(${backgroundColor}, 1px, transparent 1px)`,
              backgroundSize: "10px 10px",
            }}
          />

          {/* Image */}
          <div className="relative p-2 sm:p-4 md:p-8 z-20">
            <Image
              src={cover.src}
              alt={title}
              priority
              className="rounded-xl group-hover:scale-102 transition-transform duration-300 group-hover:shadow-sm shadow-black/50"
            />
          </div>
        </LinkButton>
      </div>

      {/* Title & CTA */}
      <div className="flex items-center justify-between p-4 border-b border-neutral-700">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{title}</h3>
          <p className="text-gray-300 text-sm">{role}</p>
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
