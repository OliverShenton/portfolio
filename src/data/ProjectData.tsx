// Portfolio
import portfolioImg1 from "../../public/images/projects/portfolio/image-1.png";

// BookBarter
import bookbarterImg1 from "../../public/images/projects/book-barter/image-1.png";

// QuickBites
import quickBitesImg1 from "../../public/images/projects/quick-bites/image-1.png";

// SkillForge
// import skillforgeImg1 from "../../public/images/projects/skill-forge/image-1.png";

// Brew & Bloom Cafe
import brewandbloomImg1 from "../../public/images/projects/brew-and-bloom/image-1.png";

// BookMe Studio
import bookmestudioImg1 from "../../public/images/projects/bookme-studio/image-1.png";

// Chat Room
import chatroomImg1 from "../../public/images/projects/chat-room/image-1.png";

// TicTacToe
import tictactoeImg1 from "../../public/images/projects/tic-tac-toe/image-1.png";

// Weather Wizard
import weatherwizardImg1 from "../../public/images/projects/weather-tracker/image-1.png";

import { StaticImageData } from "next/image";

type Project = {
  id: number;
  bgColor: string;
  images: StaticImageData[];
  title: string;
  role: string;
  github: string;
};

export const projectData: Project[] = [
  {
    id: 1,
    bgColor: "#00bfff",
    title: "Portfolio",
    role: "Design & Development",
    images: [portfolioImg1],
    github: "https://github.com/OliverShenton/portfolio",
  },
  {
    id: 2,
    bgColor: "#ffb347",
    title: "BookBarter",
    role: "Design & Development",
    images: [bookbarterImg1],
    github: "/",
  },
  {
    id: 3,
    bgColor: "#ffd700",
    title: "QuickBites",
    role: "Design & Development",
    images: [quickBitesImg1],
    github: "/",
  },
  {
    id: 4,
    bgColor: "#8fbc8f",
    title: "Brew & Bloom Café",
    role: "Design & Development",
    images: [brewandbloomImg1],
    github: "https://github.com/OliverShenton/brew-and-bloom-cafe",
  },
  {
    id: 5,
    bgColor: "#9370db",
    title: "BookMe Studio",
    role: "Design & Development",
    images: [bookmestudioImg1],
    github: "/",
  },
  {
    id: 6,
    bgColor: "#4682b4",
    title: "Chat Room",
    role: "Design & Development",
    images: [chatroomImg1],
    github: "https://github.com/OliverShenton/os-nodejs-chat-app",
  },
  {
    id: 7,
    bgColor: "#ffd580",
    title: "Tic-Tac-Toe",
    role: "Design & Development",
    images: [tictactoeImg1],
    github: "/",
  },
  {
    id: 8,
    bgColor: "#87cefa",
    title: "Weather Wizard",
    role: "Design & Development",
    images: [weatherwizardImg1],
    github: "https://github.com/OliverShenton/weather-tracker",
  },
  // {
  //   id: 9,
  //   title: "QuickBites",
  //   description:
  //     "QuickBites is a fictional food blog for busy professionals. It shares fast, healthy, and budget-friendly recipes that can be made in under 30 minutes. It's aimed at people who love good food but don't have hours to spend in the kitchen.",
  //   purpose: "",
  //   websiteType: "Blog",
  //   design: [],
  //   pageRequirements: [],
  //   targetAudience: [],
  //   functionalRequirements: [],
  //   nonFucntionalRequirements: [],
  //   contentExpectations: "",
  //   designAssetsAndBranding: "",
  // },
];
