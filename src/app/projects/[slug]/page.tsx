import CasestudyContent from "@/components/casestudy/CasestudyContent";
import SectionContainer from "@/components/global/SectionContainer";
import { GetAllProjects } from "@/components/projects/ProjectHelper";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  const projects = typeof GetAllProjects === "function" ? GetAllProjects() : GetAllProjects;
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;

  const all = typeof GetAllProjects === "function" ? GetAllProjects() : GetAllProjects;
  const project = all.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: `${project.title} | Oliver Shenton`,
    description: project.description,
  };
}

const ProjectsSlugPage = async ({ params }: { params: Promise<Params> }) => {
  const { slug } = await params;

  const all = typeof GetAllProjects === "function" ? GetAllProjects() : GetAllProjects;
  const project = all.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <SectionContainer id="slug-page" relative>
      <CasestudyContent
        title={project.title}
        slug={project.slug}
        cover={project.cover}
        role={project.role}
        repo={project.repo}
        projectType={project.projectType}
        client={project.client}
        duration={project.duration}
        status={project.status}
        year={project.year}
        lastUpdated={project.lastUpdated}
        demo={project.demo}
        description={project.description}
        audience={project.audience}
        features={project.features}
        pages={project.pages}
        techstack={project.techstack}
        gallery={project.gallery}
        updateHistory={project.updateHistory}
      />
    </SectionContainer>
  );
};

export default ProjectsSlugPage;
