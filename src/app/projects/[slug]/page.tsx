"use client";

import SectionContainer from "@/components/ui/global/SectionContainer";
import SlugContent from "@/components/ui/project-slug/SlugContent";
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
      <div id="slug-page-background" className="absolute inset-0 bg-cover bg-center z-0 h-full" />

      {/* Main content */}
      <SlugContent
        title={project.title}
        slug={project.slug}
        cover={project.cover}
        role={project.role}
        repo={project.repo}
        projectType={project.projectType}
        personalClient={project.personalClient}
        duration={project.duration}
        status={project.status}
        year={project.year}
        lastUpdated={project.lastUpdated}
        demo={project.demo}
        description={project.description}
        problem={project.problem}
        solution={project.solution}
        audience={project.audience}
        features={project.features}
        pages={project.pages}
        techstack={project.techstack}
        gallery={project.gallery}
      />
    </SectionContainer>
  );
};

export default SlugPage;
