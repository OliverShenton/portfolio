import Hr from "@/components/global/Hr";
import SectionContainer from "@/components/global/SectionContainer";
import SectionTitle from "@/components/global/SectionTitle";
import ProjectGrid from "@/components/projects/ProjectGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oliver Shenton | All Projects",
  description:
    "A showcase of Oli's portfolio projects - sleek, high-performance web apps crafted with React, TypeScript, and thoughtful UI design.",
};

const ProjectsPage = () => {
  // const [activeFilter, setActiveFilter] = useState("All");

  return (
    <SectionContainer id="projects-page" relative>
      {/* Background */}
      <div id="projects-background" className="absolute inset-0 bg-cover bg-center z-0 h-full" />

      <Hr />
      {/* Title */}
      <SectionTitle
        title="All Projects"
        subtitle=" A selection of my favourite projects, showcasing my skills in design and development."
      />

      {/* Project cards */}
      <ProjectGrid slice={10} />
    </SectionContainer>
  );
};

export default ProjectsPage;
