// Portfolio
import portfolioImg1 from "../../public/images/projects/portfolio/image-1.png";

// MindfulPath
import mindfulpathImg1 from "../../public/images/projects/mindful-path/image-1.png";
import mindfulpathImg2 from "../../public/images/projects/mindful-path/image-2.png";
import mindfulpathImg3 from "../../public/images/projects/mindful-path/image-3.png";

// BookBarter
// import bookbarterImg1 from "../../public/images/projects/book-barter/image-1.png";

// QuickBites
// import quickBitesImg1 from "../../public/images/projects/quick-bites/image-1.png";

// SkillForge
// import skillforgeImg1 from "../../public/images/projects/skill-forge/image-1.png";

// Brew & Bloom Cafe
// import brewandbloomImg1 from "../../public/images/projects/brew-and-bloom/image-1.png";

// BookMe Studio
// import bookmestudioImg1 from "../../public/images/projects/bookme-studio/image-1.png";

// Chat Room
// import chatroomImg1 from "../../public/images/projects/chat-room/image-1.png";

// TicTacToe
// import tictactoeImg1 from "../../public/images/projects/tic-tac-toe/image-1.png";

// Weather Wizard
// import weatherwizardImg1 from "../../public/images/projects/weather-tracker/image-1.png";

// import { StaticImageData } from "next/image";
import { ProjectCaseStudy } from "@/schemas/ProjectSchema";

export const projectData: ProjectCaseStudy[] = [
  {
    title: "Portfolio",
    slug: "portfolio",
    cover: { src: portfolioImg1, alt: "Portfolio hero", caption: "" },
    role: "Design & Development",
    repo: "https://github.com/OliverShenton/portfolio",
    // demo: "https://oliver-shenton.com/",
    backgroundColor: "#00bfff",
    projectType: "",
    duration: "",
    status: "In Progress",
    year: 2025,
    links: "",
    description: "",
    purpose: "",
    problem: "",
    audience: "",
    gallery: [{ src: portfolioImg1, alt: "Portfolio hero" }],
  },
  {
    title: "MindfulPath",
    slug: "mindful-path",
    cover: { src: mindfulpathImg1, alt: "MindfulPath hero", caption: "" },
    role: "Design & Development",
    repo: "https://github.com/OliverShenton/mindful-path",
    backgroundColor: "#b026ff",
    projectType: "SaaS-style web app with a marketing site and logged-in dashboard.",
    duration: "12 weeks",
    status: "In Progress",
    year: 2025,
    links: "",
    description: "",
    purpose: "",
    problem: "",
    audience: "",
    gallery: [
      { src: mindfulpathImg1, alt: "Login screen" },
      { src: mindfulpathImg2, alt: "Sign up screen" },
      { src: mindfulpathImg3, alt: "Reset password screen" },
    ],
  },
  // {
  //   id: 1,
  //   title: "Portfolio",
  //   slug: "portfolio",
  //   gallery: [portfolioImg1],
  //   role: "Design & Development",
  //   repo: "https://github.com/OliverShenton/portfolio",
  //   demo: "https://oliver-shenton.com/",
  //   bgColor: "#00bfff",
  //   websiteType:
  //     "Personal / Professional brand site centered on curated work samples, and case studies.",
  //   progress: "Completed",
  //   description: "",
  //   purpose: "",
  //   problem: "",
  //   features: [""],
  //   pages: ["Home - Hero, About, Projects, Skills, Contact", "Projects", "Contact"],
  //   techstack: ["HTML", "CSS", "Tailwind", "JavaScript", "TypeScript", "React", "Next JS"],
  //   contribution: "",
  // },
  // {
  //   id: 2,
  //   title: "Mindful Path",
  //   slug: "mindfulpath",
  //   role: "Design & Development",
  //   gallery: [
  //     { src: mindfulpathImg1, alt: "Login screen" },
  //     { src: mindfulpathImg2, alt: "" },
  //     { src: mindfulpathImg3, alt: "" },
  //   ],
  //   // gallery: [mindfulpathImg1, mindfulpathImg2, mindfulpathImg3],
  //   repo: "https://github.com/OliverShenton/mindful-path",
  //   demo: "https://mindful-path-mu.vercel.app/",
  //   bgColor: "#b026ff",
  //   websiteType: "SaaS-style web app with a marketing site and logged-in dashboard.",
  //   progress: "In Progress",
  //   description:
  //     "MindfulPath is a mental wellness and meditation platform aimed at busy professionals who want to improve focus, reduce stress, and build healthier habits. It provides guided meditations, breathing exercises, daily journaling, and expert articles on mindfulness.",
  //   purpose:
  //     "The primary goal of the site is to educate users and generate subscriptions for premium guided content.",
  //   problem:
  //     "Users find it hard to keep a consistent practice; existing apps feel noisy and unfocused.",
  //   features: [
  //     "User authentication",
  //     "Dashboard with meditation progress",
  //     "Search and filter for guided meditations",
  //     "Blog with categories and tags",
  //     "Dark mode toggle",
  //     "Pricing with stripe integration",
  //   ],
  //   pages: [
  //     "Home - Hero with CTA, features, testimonials, pricing preview.",
  //     "About - Company story, mission, team photos.",
  //     "Blog/Resources - Articles on mindfulness, stress, productivity",
  //     "Pricing - Free vs Premium breakdown",
  //     "Sign Up / Login - Authentication with email and social login.",
  //     "Dashboard (auth only) - Personalised meditation plan, progress tracker, saved sessions.",
  //     "Admin Panel - Manage content, users.",
  //   ],
  //   techstack: ["Next JS", "Tailwind", "HTML", "CSS", "JavaScript", "TypeScript"],
  //   contribution: "",
  // },
  // {
  //   id: 3,
  //   bgColor: "#ffb347",
  //   title: "BookBarter",
  //   role: "Design & Development",
  //   images: [bookbarterImg1],
  //   github: "/",
  // },
  // {
  //   id: 4,
  //   bgColor: "#ffd700",
  //   title: "QuickBites",
  //   role: "Design & Development",
  //   images: [quickBitesImg1],
  //   github: "/",
  // },
  // {
  //   id: 5,
  //   bgColor: "#8fbc8f",
  //   title: "Brew & Bloom Café",
  //   role: "Design & Development",
  //   images: [brewandbloomImg1],
  //   github: "https://github.com/OliverShenton/brew-and-bloom-cafe",
  // },
  // {
  //   id: 6,
  //   bgColor: "#9370db",
  //   title: "BookMe Studio",
  //   role: "Design & Development",
  //   images: [bookmestudioImg1],
  //   github: "/",
  // },
  // {
  //   id: 7,
  //   bgColor: "#4682b4",
  //   title: "Chat Room",
  //   role: "Design & Development",
  //   images: [chatroomImg1],
  //   github: "https://github.com/OliverShenton/os-nodejs-chat-app",
  // },
  // {
  //   id: 8,
  //   bgColor: "#ffd580",
  //   title: "Tic-Tac-Toe",
  //   role: "Design & Development",
  //   images: [tictactoeImg1],
  //   github: "/",
  // },
  // {
  //   id: 9,
  //   bgColor: "#87cefa",
  //   title: "Weather Wizard",
  //   role: "Design & Development",
  //   images: [weatherwizardImg1],
  //   github: "https://github.com/OliverShenton/weather-tracker",
  // },
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
