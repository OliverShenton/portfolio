import { BsUniversalAccess } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { GiWireframeGlobe } from "react-icons/gi";
import { IoIosCode } from "react-icons/io";
import { IoSpeedometerOutline } from "react-icons/io5";
import { MdOutlineWebhook } from "react-icons/md";

export const skillsData = [
  {
    id: 1,
    title: "React Specialist",
    icon: <FaReact title="React Icon" />,
    description: "Mastery of hooks, context, composition, and scalable component architecture.",
    hoverShadowColor: "hover:shadow-[#61dafb]",
    hoverIconColor: "group-hover:text-[#61dafb]",
  },
  {
    id: 2,
    title: "JavaScript & TypeScript",
    icon: <IoIosCode title="JS and TS Icon" />,
    description:
      "Writing clean, modern JavaScript and building robust, type-safe applications with TypeScript",
    hoverShadowColor: "hover:shadow-[#f7df2e]",
    hoverIconColor: "group-hover:text-[#f7df2e]",
  },
  {
    id: 3,
    title: "Responsive Design",
    icon: <BsUniversalAccess title="Responsive Design Icon" />,
    description:
      "Crafting mobile-first experiences with fluid layouts, breakpoints, and adaptive grids.",
    hoverShadowColor: "hover:shadow-[#00bfa6]",
    hoverIconColor: "group-hover:text-[#00bfa6]",
  },
  {
    id: 4,
    title: "UI/UX Craftmanship",
    icon: <GiWireframeGlobe title="UI and UX Icon" />,
    description:
      "Designing with pixel-perfect precision, intuitive usability, and thoughtful micro-interactions.",
    hoverShadowColor: "hover:shadow-[#ff4081]",
    hoverIconColor: "group-hover:text-[#ff4081]",
  },
  {
    id: 5,
    title: "State Management",
    icon: <MdOutlineWebhook title="State Management Icon" />,
    description: "Managing local and shared states with React hooks, and Context.",
    hoverShadowColor: "hover:shadow-[#3eaf7c]",
    hoverIconColor: "group-hover:text-[#3eaf7c]",
  },
  {
    id: 6,
    title: "Performance & Optimisation",
    icon: <IoSpeedometerOutline title="Performance and Optimisation Icon" />,
    description:
      "Enhancing application performance with smart rendering, lazy-loading, and React best practises.",
    hoverShadowColor: "hover:shadow-[#ff6d00]",
    hoverIconColor: "group-hover:text-[#ff6d00]",
  },
];
