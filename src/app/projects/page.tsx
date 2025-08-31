import Hr from "@/components/ui/global/Hr";
import SectionContainer from "@/components/ui/global/SectionContainer";
import SectionTitle from "@/components/ui/global/SectionTitle";
import ProjectGrid from "@/components/ui/projects/ProjectGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oliver Shenton | All Projects",
  description:
    "A showcase of Oli's portfolio projects - sleek, high-performance web apps crafted with React, TypeScript, and thoughtful UI design.",
};

const ProjectsPage = () => {
  return (
    <SectionContainer id="projects-page" relative>
      {/* Background */}
      <div
        id="projects-page-background"
        className="absolute inset-0 bg-cover bg-center z-0 h-full"
      />

      <Hr />

      {/* Title */}
      <SectionTitle
        title="All My Projects"
        subtitle="Curated showcase with code and context"
        marker="amber"
      />

      {/* Project cards */}
      <ProjectGrid slice={10} />
    </SectionContainer>
  );
};

export default ProjectsPage;
