import Image from "next/image";
import CardContainer from "../global/CardContainer";
import { ProjectCard as ProjectCardProps } from "@/schema/ProjectSchema";
import { LinkButton, RouterButton } from "../global/Button";
import { FaCode, FaInfo } from "react-icons/fa";

const ProjectCard = ({ title, slug, cover, role, repo }: ProjectCardProps) => {
  return (
    <CardContainer className="p-4 sm:p-6 md:p-8 space-y-4">
      <RouterButton
        href={`/projects/${encodeURIComponent(slug)}`}
        role="link"
        title={`${title} case study`}>
        <Image
          src={cover.src}
          alt={title}
          className="rounded-[10px] sm:rounded-[12px] md:rounded-[14px] lg:rounded-[16px]"
        />
      </RouterButton>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="space-y-2 w-full">
          <h3 className="text-xl sm:text-2xl font-semibold text-var(--text">{title}</h3>
          <p className="text-sm text-[var(--secondary-text)]">{role}</p>
        </div>
        <div className="flex items-center gap-4 w-full md:w-fit">
          <LinkButton href={repo.link} variant="secondary" title="Github">
            <FaCode />
          </LinkButton>
          <RouterButton
            href={`/projects/${encodeURIComponent(slug)}`}
            variant="secondary"
            title={`${title} case study`}>
            <FaInfo />
          </RouterButton>
        </div>
      </div>
    </CardContainer>
  );
};

export default ProjectCard;
