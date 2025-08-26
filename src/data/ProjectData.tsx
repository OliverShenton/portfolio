// Portfolio
import portfolioImg1 from "../../public/images/projects/portfolio/image-1.png";

// MindfulPath
import mindfulpathImg1 from "../../public/images/projects/mindful-path/image-1.png";
import mindfulpathImg2 from "../../public/images/projects/mindful-path/image-2.png";
import mindfulpathImg3 from "../../public/images/projects/mindful-path/image-3.png";

// QuickBites
// import quickBitesImg1 from "../../public/images/projects/quick-bites/image-1.png";

// import { StaticImageData } from "next/image";
import { ProjectCaseStudy } from "@/schemas/ProjectSchema";

export const projectData: ProjectCaseStudy[] = [
  {
    title: "Portfolio",
    slug: "portfolio",
    cover: { src: portfolioImg1, alt: "Portfolio hero", caption: "" },
    role: "Design & Development",
    repo: "https://github.com/OliverShenton/portfolio",
    backgroundColor: "#00bfff",
    projectType: "Personal portfolio for showcasing work to potential employers and clients.",
    personalClient: "Personal",
    year: 2025,
    lastUpdated: "26 August 2025",
    duration: "N/A",
    status: "In Progress",
    demo: "https://oliver-shenton.com/",
    description:
      "A modern, developer-focused personal portfolio site built with Next JS, and Tailwind CSS. It showcases projects, technical skills, and contact information in a clean, responsive, and accessible layout.",
    problem:
      "Developers often struggle to present their skills, projects, and personality in a way that stands out. Job applications can feel impersonal, and static CVs rarely reflect someone's technical and creative strengths.",
    solution:
      "This portfolio provides a dynamic, interactive experience that highlights real, production-grade frontend work, communicates areas of expertise, tools utilised, and provides an easy way for recruiters or clients to connect, explore projects, or download my CV.",
    audience: [
      "Hiring managers looking to assess frontend skills quickly",
      "Tech recruiters scanning for talent with React/Next.js experience",
      "Clients seeking freelance or contract developers",
      "Peers and collaborators in the frontend community",
    ],
    features: [
      { feature: "Responsive UI with a modern design", done: true },
      { feature: "Accessibility (labels, focus states, keyboard nav)", done: true },
      { feature: "Project filtering/search", done: true },
      { feature: "Animations", done: true },
      { feature: "Contact form with validation", done: true },
      { feature: "Skills carousel", done: true },
    ],
    pages: [
      { feature: "Home (hero, about, projects, skills, contact)", done: true },
      { feature: "Projects (filter, project list)", done: true },
      { feature: "Project Slugs (overview, context, scope, techstack, gallery)", done: true },
      { feature: "Contact (form)", done: true },
    ],
    techstack: ["HTML", "CSS", "Tailwind CSS", "Next JS"],
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
    personalClient: "Personal",
    year: 2025,
    lastUpdated: "24 August 2025",
    duration: "12 weeks",
    status: "In Progress",
    demo: "https://mindful-path-mu.vercel.app/",
    description:
      "MindfulPath is a mental wellness and meditation platform aimed at busy professionals who want to improve focus, reduce stress, and build healthier habits. It provides guided meditations, breathing exercises, daily journaling, and expert articles on mindfulness.",
    problem:
      "Many people want to practise meditation but struggle. Feeling like they don't have enough minutes in a day, starting but not maintaining a habit, or existing apps feel overwhelming, cluttered, or hidden behind complex paywalls. MindfulPath solves this by offering quick sessions, easy onboarding, clear pricing, and an approachable design.",
    solution:
      "The project exists to help individuals - especially busy professionals - build a consitent mindfulness practise. By combing sleek design with practical tools like reminders, progress dashboards, and a resource rich blog, MindfulPath lowers the barrier to entry for meditation and mental wellness.",
    audience: [
      "Busy professionals and students looking for a quick, effective way to reduce stress and improve focus",
      "Anyone new to mindfulness who needs an approachable, well-designed entry point without friction",
    ],
    features: [
      { feature: "Responsive UI with modern design (Next.js + Tailwind)", done: true },
      {
        feature: "Authentication flow (Sign up, Log in, Reset password — Supabase ready)",
        done: true,
      },
      { feature: "Pricing page with tiered plans + FAQs", done: true },
      { feature: "Blog system with static posts + pagination", done: true },
      { feature: "About page (mission, story grid, values)", done: true },
      { feature: "Accessibility (labels, focus states, keyboard nav)", done: true },
      { feature: "Supabase integration for live authentication", done: false },
      { feature: "User dashboard (progress tracking, streaks, recommended sessions)", done: false },
      { feature: "Blog CMS integration (dynamic posts, categories, search)", done: false },
      { feature: "Contact/Support page with form + FAQ search", done: false },
      { feature: "Dark mode + user preferences", done: false },
      { feature: "Premium features (coaching, offline mode)", done: false },
    ],
    pages: [
      { feature: "Home (hero, features, CTAs)", done: true },
      { feature: "Pricing (plans, toggle, FAQs, support CTA)", done: true },
      { feature: "About (hero, story grid, values, team)", done: true },
      { feature: "Blog index (12 posts, pagination, filters ready)", done: true },
      { feature: "Blog post (slug) (layout ready to extend)", done: true },
      { feature: "Login / Signup (forms, animations, accessibility)", done: true },
      { feature: "Reset password (request + new password flow)", done: true },
      { feature: "Dashboard (personalised data after login)", done: false },
      { feature: "Profile/Settings (account management, preferences)", done: false },
      { feature: "Contact/Support (form + knowledge base)", done: false },
    ],
    techstack: [
      "Next JS",
      " React 18",
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      " React Icons",
      "Supabase",
      "Vercel",
      "Stripe",
      "Git",
      "Github",
    ],
    gallery: [
      { src: mindfulpathImg1, alt: "Login screen" },
      { src: mindfulpathImg2, alt: "Sign up screen" },
      { src: mindfulpathImg3, alt: "Reset password screen" },
    ],
  },
  // {
  //   title: "QuickBites",
  //   slug: "quick-bites",
  //   cover: { src: quickBitesImg1, alt: "QuickBites hero", caption: "" },
  //   role: "Design & Development",
  //   repo: "",
  //   backgroundColor: "#ffd700",
  //   projectType: "",
  //   personalClient: "Personal",
  //   duration: "N/A",
  //   status: "In Progress",
  //   year: 2025,
  //   lastUpdated: "N/A",
  //   demo: "",
  //   description:
  //     "QuickBites is a modern recipe website that showcases a curated collection of fast, healthy, and delicious meals. It features a user-friendly layout, filterable recipe listings, detailed slug pages for each dish, and social proof elemtns like awrds and testimonials - all styled with a clean, responsive UI.",
  //   solution:
  //     "The goal of QuickBites is to provide users with a seamless and enjoyable way to discover and cook nutritious meals quickly. It focuses on accessibility, performance, and user experience to make cooking approachable for everyone.",
  //   problem:
  //     "Busy people often struggle to find reliable, healthy recipes that don't require excessive time or obscure ingredients. Most recipe sites are bloated, cluttered with ads, or overwhelming to navigate.",
  //   audience: [
  //     "Busy professionals looking for healthy meal prep ideas",
  //     "Students or beginners trying to cook at home",
  //     "Fitness enthusiasts interested in nutritional balance",
  //     "Parents in need of quick and reliable family meals",
  //     "Anyone who wants to cook fast without sacrificing taste or quality",
  //   ],
  //   features: [{ feature: "", done: true }],
  //   pages: [{ feature: "", done: true }],
  //   techstack: [],
  //   gallery: [{ src: quickBitesImg1, alt: "Hero" }],
  // },

  // =======================================================================
  // =======================================================================
  // =======================================================================
  // =======================================================================
  // =======================================================================

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
