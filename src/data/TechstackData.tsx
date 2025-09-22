import { Techstack } from "@/schema/TechstackSchema";

export const techstackData: Techstack[] = [
  {
    techstack: "Languages",
    tech: [
      { tech: "HTML", level: "Core" },
      { tech: "CSS", level: "Core" },
      { tech: "JavaScript", level: "Core" },
      { tech: "TypeScript", level: "Core" },
    ],
  },
  {
    techstack: "Frameworks",
    tech: [
      { tech: "React", level: "Core" },
      { tech: "Next.js", level: "Core" },
      { tech: "Vite", level: "Core" },
    ],
  },
  {
    techstack: "State",
    tech: [
      { tech: "Context API", level: "Capable" },
      { tech: "Redux Toolkit", level: "Familiar" },
      { tech: "Zustand", level: "Learning" },
    ],
  },
  {
    techstack: "Styling",
    tech: [
      { tech: "Tailwind CSS", level: "Core" },
      { tech: "Framer Motion", level: "Core" },
      { tech: "a11y", level: "Core" },
    ],
  },
  {
    techstack: "Tools",
    tech: [
      { tech: "ESLint", level: "Core" },
      { tech: "Prettier", level: "Core" },
      { tech: "Git", level: "Core" },
      { tech: "Github", level: "Core" },
      { tech: "Visual Studio Code", level: "Core" },
      { tech: "Third-Party APIs", level: "Capable" },
    ],
  },
  {
    techstack: "Testing",
    tech: [
      { tech: "Lighthouse & Web Vitals", level: "Familiar" },
      { tech: "Vitest", level: "Familiar" },
      { tech: "React Testing Library", level: "Learning" },
    ],
  },
  {
    techstack: "Platform",
    tech: [
      { tech: "Vercel", level: "Core" },
      { tech: "Firebase", level: "Capable" },
      { tech: "Auth.js (NextAuth)", level: "Learning" },
      { tech: "Formspree", level: "Capable" },
      { tech: "TanStack Query", level: "Capable" },
    ],
  },
  {
    techstack: "Backend / Databases",
    tech: [
      { tech: "Node.js", level: "Familiar" },
      { tech: "JWT", level: "Familiar" },
      { tech: "Websocket IO", level: "Familiar" },
      { tech: "MongoDB", level: "Familiar" },
      { tech: "PostgreSQL", level: "Familiar" },
      { tech: "Supabase", level: "Familiar" },
      { tech: "Firebase", level: "Familiar" },
    ],
  },
];
