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

// import { StaticImageData } from "next/image";

// type Project = {
//   // Base card
//   id: number;
//   title: string;
//   featured: boolean;
//   images: StaticImageData[];
//   github: string;
//   demo: string;

//   // Modal (inc above)
//   description: string;
//   purpose: string;
//   websiteType: string;
// };

export const projectData = [
  {
    id: 1,
    bgColor: "#3b82f6",
    title: "Portfolio",
    featured: true,
    images: [portfolioImg1],
    github: "https://github.com/OliverShenton/portfolio",
  },
  {
    id: 2,
    bgColor: "#7c2d12",
    title: "BookBarter",
    featured: true,
    images: [bookbarterImg1],
    github: "/",
  },
  {
    id: 3,
    bgColor: "#eab308",
    title: "QuickBites",
    featured: true,
    images: [quickBitesImg1],
    github: "/",
  },
  {
    id: 4,
    bgColor: "#f97316",
    title: "Brew & Bloom Café",
    featured: false,
    images: [brewandbloomImg1],
    github: "https://github.com/OliverShenton/brew-and-bloom-cafe",
  },
  {
    id: 5,
    bgColor: "",
    title: "BookMe Studio",
    featured: false,
    images: [bookmestudioImg1],
    github: "/",
  },
  { id: 6, bgColor: "", title: "Chat Room", featured: false, images: [chatroomImg1], github: "/" },
  {
    id: 7,
    bgColor: "",
    title: "Tic-Tac-Toe",
    featured: false,
    images: [tictactoeImg1],
    github: "/",
  },
  {
    id: 8,
    bgColor: "",
    title: "Weather Wizard",
    featured: false,
    images: [weatherwizardImg1],
    github: "/",
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
