"use client";

import SectionContainer from "@/components/global/SectionContainer";
import SlugContent from "@/components/project-slug/SlugContent";
import { projectData } from "@/data/ProjectData";
import { notFound } from "next/navigation";
import { use } from "react";

const SlugPage = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params);

  const project = projectData.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <SectionContainer id="slug-page" relative>
      {/* Background */}
      <div id="slug-background" className="absolute inset-0 bg-cover bg-center z-0 h-full" />

      {/* Main content */}
      <SlugContent
        title={project.title}
        slug={project.slug}
        cover={project.cover}
        role={project.role}
        repo={project.repo}
        projectType={project.projectType}
        duration={project.duration}
        status={project.status}
        year={project.year}
        links={project.links}
        description={project.description}
        purpose={project.purpose}
        problem={project.problem}
        audience={project.audience}
        gallery={project.gallery}
      />
    </SectionContainer>
  );
};

export default SlugPage;
