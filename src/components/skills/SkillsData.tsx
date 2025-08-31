import { CiDatabase, CiGrid42 } from "react-icons/ci";
import { FaReact } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import { GiWireframeGlobe } from "react-icons/gi";
import { IoSpeedometerOutline } from "react-icons/io5";

export const skillsData = [
  {
    id: 1,
    title: "React & Next.js",
    icon: <FaReact title="React Icon" />,
    description:
      "Component architecture, server components, routing, and code-splitting foir fast, maintainable UIs.",
    hoverShadowColor: "hover:shadow-[#61dafb]",
    hoverIconColor: "group-hover:text-[#61dafb]",
  },
  {
    id: 2,
    title: "JavaScript & TypeScript",
    icon: <FaCode title="JS and TS Icon" />,
    description:
      "Modern JavaScript patterns with strict TypeScript for safe, refactor-friendly code.",
    hoverShadowColor: "hover:shadow-[#f7df2e]",
    hoverIconColor: "group-hover:text-[#f7df2e]",
  },
  {
    id: 3,
    title: "Responsive Design",
    icon: <CiGrid42 title="Responsive Design Icon" />,
    description:
      "Mobil-first layouts with fluid scales, container queries, and adaptive grids across breakpoints.",
    hoverShadowColor: "hover:shadow-[#00bfa6]",
    hoverIconColor: "group-hover:text-[#00bfa6]",
  },
  {
    id: 4,
    title: "UI/UX Craftsmanship",
    icon: <GiWireframeGlobe title="UI and UX Icon" />,
    description:
      "Token-driven theming, accessible components, and polished micro-interactions that feel intentional.",
    hoverShadowColor: "hover:shadow-[#ff4081]",
    hoverIconColor: "group-hover:text-[#ff4081]",
  },
  {
    id: 5,
    title: "State & Data",
    icon: <CiDatabase title="State Management Icon" />,
    description:
      "React Query, forms, and local/global state (Redux) with optimistic updates and caching.",
    hoverShadowColor: "hover:shadow-[#3eaf7c]",
    hoverIconColor: "group-hover:text-[#3eaf7c]",
  },
  {
    id: 6,
    title: "Performance & Accessibility",
    icon: <IoSpeedometerOutline title="Performance and Optimisation Icon" />,
    description:
      "Web Vitals budgets, image strategy, and a11y patterns to keep p75 LCP < 2s and axe ≥ 95.",
    hoverShadowColor: "hover:shadow-[#ff6d00]",
    hoverIconColor: "group-hover:text-[#ff6d00]",
  },
];
