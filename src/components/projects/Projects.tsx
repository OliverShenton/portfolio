// import Section from "../global/Section";

import Section from "../global/Section";
import ProjectsCards from "./ProjectsShowcase";
import ProjectsTabs from "./ProjectTabs";
import TechCards from "./TechStackShowcase";

// import ProjectTabs from "./ProjectTabs";
// import ProjectsCards from "./ProjectsCards";
// import TechCards from "./TechCards";

// export default function Projects() {
//   return (
//     <Section title="Project Showcase" background="bg-gradient-to-b from-[#1a1a2e] to-[#000000]">
//       <ProjectTabs projects={<ProjectsCards />} techStack={<TechCards />} />
//     </Section>
//   );
// }

export default function Projects() {
  return (
    <Section>
      <ProjectsTabs projects={<ProjectsCards />} techstack={<TechCards />} />
    </Section>
  );
}
