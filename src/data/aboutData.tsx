import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { IoMdBriefcase } from "react-icons/io";
import { IoLayers } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiJavascript, SiTypescript } from "react-icons/si";

export const aboutData = [
  { label: "Who am I?", text: "" },
  {
    label: "What do I do?",
    text: "I specialise in building responsive, accessible, and visually engaging interfaces, utilising the powers of react, Next.js, TypeScript, and TailwindCSS.",
  },
  { label: "Where do I apply my skills?", text: "" },
  {
    label: "When did I start?",
    text: "While I have a degree in Forensic Science, I began coding at Universtiy, and really began honing my skills within the last two years.",
  },
  {
    label: "Why do I do it?",
    text: " I code because I enjoy it. I believe in magical digital experiences, where design, code, and usability work together flawlessly",
  },
  { label: "How do I work?", text: "" },
];

export const aboutTechData = [
  { icon: <FaReact />, text: "React", color: "group-hover:text-[#61dafb]" },
  { icon: <RiNextjsFill />, text: "Next.js", color: "group-hover:text-[#000000]" },
  { icon: <SiTypescript />, text: "TypeScript", color: "group-hover:text-[#3178c6]" },
  { icon: <RiTailwindCssFill />, text: "TailwindCSS", color: "group-hover:text-[#38bdf8]" },
  { icon: <FaHtml5 />, text: "HTML", color: "group-hover:text-[#e34f26]" },
  { icon: <FaCss3 />, text: "CSS", color: "group-hover:text-[#1572b6]" },
  { icon: <SiJavascript />, text: "JavaScript", color: "group-hover:text-[#f7df1e]" },
];

export const aboutFacts = [
  { icon: <IoMdBriefcase />, label: "Experience", text: "2 Years" },
  { icon: <IoLayers />, label: "Projects", text: "3+" },
];

// <p></p>
//       <p>
// I specialise in building responsive, accesbile, and visually engagin interfaces, utilising
// the powers of react, Next.js, TypeScript, and TailwindCSS.
//       </p>
//       <p>
// While I have a degree in Forensic Science, I began coding at Universtiy, and really began
// honing my skills within the last two years.
//       </p>
//       <p>
// I code because I enjoy it. I believe in magical digital experiences, where design, code, and
// usability work together flwlessly
//       </p>
