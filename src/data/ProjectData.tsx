// Portfolio
import portfolioImg1 from "../../public/images/projects/portfolio/image-1.png";

// BookBarter
import bookbarterImg1 from "../../public/images/projects/book-barter/image-1.png";

// SkillForge
import skillforgeImg1 from "../../public/images/projects/skill-forge/image-1.png";

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
  slug: string;
  title: string;
  featured: boolean;
  images: StaticImageData[];
  github: string;
};

export const projectData: Project[] = [
  {
    id: 1,
    slug: "personal-portfolio",
    title: "Portfolio",
    featured: true,
    images: [portfolioImg1],
    github: "https://github.com/OliverShenton/portfolio",
  },
  {
    id: 2,
    slug: "book-barter",
    title: "BookBarter",
    featured: true,
    images: [bookbarterImg1],
    github: "",
  },
  {
    id: 3,
    slug: "skill-forge",
    title: "SkillForge",
    featured: true,
    images: [skillforgeImg1],
    github: "",
  },
  {
    id: 4,
    slug: "brew-and-bloom-cafe",
    title: "Brew & Bloom Café",
    featured: false,
    images: [brewandbloomImg1],
    github: "https://github.com/OliverShenton/brew-and-bloom-cafe",
  },
  {
    id: 5,
    slug: "book-me-studio",
    title: "BookMe Studio",
    featured: false,
    images: [bookmestudioImg1],
    github: "",
  },
  {
    id: 6,
    slug: "chat-room",
    title: "Chat Room",
    featured: false,
    images: [chatroomImg1],
    github: "",
  },
  {
    id: 7,
    slug: "tic-tac-toe",
    title: "Tic-Tac-Toe",
    featured: false,
    images: [tictactoeImg1],
    github: "",
  },
  {
    id: 8,
    slug: "weather-wizard",
    title: "Weather Wizard",
    featured: false,
    images: [weatherwizardImg1],
    github: "",
  },
];
