import { ProjectCasestudy } from "@/schema/ProjectSchema";
import image1 from "../../assets/casestudies/portfolio/image-1.png";

export const PortfolioCasestudy: ProjectCasestudy[] = [
  {
    title: "Portfolio",
    slug: "portfolio",
    cover: { src: image1, alt: "Home Page > Hero > Slide One" },
    role: "Design & Development",
    repo: "https://github.com/OliverShenton/portfolio",
    projectType: "Personal portfolio for showcasing work to potential employers and clients.",
    client: "Personal",
    year: 2025,
    lastUpdated: "07 September 2025",
    duration: "Ongoing",
    status: "In Progress",
    demo: "https://oliver-shenton.com/",
    description:
      "A modern, developer-focused personal portfolio site built with Next JS, and Tailwind CSS. It showcases projects, technical skills, and contact information in a clean, responsive, and accessible layout.",
    // problem:
    //   "Developers often struggle to present their skills, projects, and personality in a way that stands out. Job applications can feel impersonal, and static CVs rarely reflect someone's technical and creative strengths.",
    // solution:
    //   "This portfolio provides a dynamic, interactive experience that highlights real, production-grade frontend work, communicates areas of expertise, tools utilised, and provides an easy way for recruiters or clients to connect, explore projects, or download my CV.",
    audience: [
      "Hiring managers looking to assess frontend skills quickly",
      "Tech recruiters scanning for talent with React/Next.js experience",
      "Clients seeking freelance or contract developers",
      "Peers and collaborators in the frontend community",
    ],
    features: [
      { feature: "Responsive UI with a modern design", completed: true },
      { feature: "Accessibility (labels, focus states, keyboard nav)", completed: true },
      { feature: "Animations", completed: true },
      { feature: "Contact form with validation", completed: true },
      { feature: "Skills carousel", completed: true },
      { feature: "Project case studies", completed: true },
    ],
    pages: [
      { feature: "Home (hero, about, projects, skills, contact)", completed: true },
      { feature: "Projects (project list)", completed: true },
      { feature: "Project Slugs (overview, context, scope, techstack, gallery)", completed: true },
      { feature: "Contact (contact form, contact details)", completed: true },
    ],
    techstack: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "React Icons",
      "React Bits (animated component library)",
      "Tailwind CSS",
      "Framer Motion",
      "Git & GitHub",
      "Vercel (deployment)",
      "Accessibility (WCAG basics, alt text, semantic HTML)",
      "Basic SEO (metadata, OpenGraph tags)",
      "Responsive Design (mobile-first)",
      "Component Architecture",
      "Image Optimization (Next/Image)",
      "Static Site Generation (SSG)",
      "Mock Data & Dynamic Routing",
    ],
    gallery: [{ src: image1, alt: "Home Page > Hero > Slide One" }],
    updateHistory: [{ date: "", description: "" }],
  },
];
