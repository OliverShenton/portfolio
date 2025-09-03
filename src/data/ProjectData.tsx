// Portfolio
import portfolioImg1 from "../../public/images/projects/portfolio/image-1.png";
import portfolioImg4 from "../../public/images/projects/portfolio/image-4.png";
import portfolioImg5 from "../../public/images/projects/portfolio/image-5.png";
import portfolioImg6 from "../../public/images/projects/portfolio/image-6.png";
import portfolioImg7 from "../../public/images/projects/portfolio/image-7.png";

// MindfulPath
import mindfulpathImg1 from "../../public/images/projects/mindful-path/image-1.png";
import mindfulpathImg2 from "../../public/images/projects/mindful-path/image-2.png";
import mindfulpathImg3 from "../../public/images/projects/mindful-path/image-3.png";

// QuickBites
import quickBitesImg1 from "../../public/images/projects/quick-bites/image-1.png";

// Weather Wizard
import weatherWizardImg1 from "../../public/images/projects/weather-tracker/image-1.png";
import weatherWizardImg2 from "../../public/images/projects/weather-tracker/image-2.png";
import weatherWizardImg3 from "../../public/images/projects/weather-tracker/image-3.png";
import weatherWizardImg4 from "../../public/images/projects/weather-tracker/image-4.png";
import weatherWizardImg5 from "../../public/images/projects/weather-tracker/image-5.png";

// BookBarter
// import bookBarterImg1 from "../../../public/images/projects/book-barter/image-1.png";

import { ProjectCaseStudy } from "@/schemas/ProjectSchema";

export const projectData: ProjectCaseStudy[] = [
  {
    title: "Portfolio",
    slug: "portfolio",
    cover: { src: portfolioImg1, alt: "Portfolio hero" },
    role: "Design & Development",
    repo: "https://github.com/OliverShenton/portfolio",
    backgroundColor: "#00bfff",
    projectType: "Personal portfolio for showcasing work to potential employers and clients.",
    personalClient: "Personal",
    year: 2025,
    lastUpdated: "03 September 2025",
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
      { feature: "Animations", done: true },
      { feature: "Contact form with validation", done: true },
      { feature: "Skills carousel", done: true },
      { feature: "Project case studies", done: true },
    ],
    pages: [
      { feature: "Home (hero, about, projects, skills, contact)", done: true },
      { feature: "Projects (filter, project list)", done: true },
      { feature: "Project Slugs (overview, context, scope, techstack, gallery)", done: true },
      { feature: "Contact (form)", done: true },
    ],
    techstack: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "React Icons",
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
    gallery: [
      { src: portfolioImg1, alt: "Portfolio hero" },
      { src: portfolioImg4, alt: "Skill section" },
      { src: portfolioImg5, alt: "Contact section" },
      { src: portfolioImg6, alt: "Projects page" },
      { src: portfolioImg7, alt: "Contact page & contact form" },
    ],
  },
  {
    title: "MindfulPath",
    slug: "mindful-path",
    cover: { src: mindfulpathImg1, alt: "MindfulPath hero" },
    role: "Design & Development",
    repo: "https://github.com/OliverShenton/mindful-path",
    backgroundColor: "#b026ff",
    projectType: "SaaS-style web app with a marketing site and logged-in dashboard.",
    personalClient: "Personal",
    year: 2025,
    lastUpdated: "24 August 2025",
    duration: "12 weeks",
    status: "On Hold",
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
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "React Icons",
      "Tailwind CSS",
      "Framer Motion",
      "Git & GitHub",
      "RESTful APIs (static data simulated)",
      "Vercel (deployment)",
      "Accessibility (WCAG basics, alt text, semantic HTML)",
      "Basic SEO (metadata, OpenGraph tags)",
      "Responsive Design (mobile-first)",
      "Component Architecture",
      "Image Optimization (Next/Image)",
      "Static Site Generation (SSG)",
      "Mock Data & Dynamic Routing",
    ],
    gallery: [
      { src: mindfulpathImg1, alt: "Login screen" },
      { src: mindfulpathImg2, alt: "Sign up screen" },
      { src: mindfulpathImg3, alt: "Reset password screen" },
    ],
  },
  {
    title: "QuickBites",
    slug: "quick-bites",
    cover: { src: quickBitesImg1, alt: "QuickBites hero" },
    role: "Design & Development",
    repo: "N/A",
    backgroundColor: "#ffd700",
    projectType: "Blog",
    personalClient: "Personal",
    duration: "N/A",
    status: "On Hold",
    year: 2025,
    lastUpdated: "N/A",
    demo: "N/A",
    description:
      "QuickBites is a modern recipe website that showcases a curated collection of fast, healthy, and delicious meals. It features a user-friendly layout, filterable recipe listings, detailed slug pages for each dish, and social proof elemtns like awrds and testimonials - all styled with a clean, responsive UI.",
    solution:
      "The goal of QuickBites is to provide users with a seamless and enjoyable way to discover and cook nutritious meals quickly. It focuses on accessibility, performance, and user experience to make cooking approachable for everyone.",
    problem:
      "Busy people often struggle to find reliable, healthy recipes that don't require excessive time or obscure ingredients. Most recipe sites are bloated, cluttered with ads, or overwhelming to navigate.",
    audience: [
      "Busy professionals looking for healthy meal prep ideas",
      "Students or beginners trying to cook at home",
      "Fitness enthusiasts interested in nutritional balance",
      "Parents in need of quick and reliable family meals",
      "Anyone who wants to cook fast without sacrificing taste or quality",
    ],
    features: [
      { feature: "Responsive hero section with featured recipe", done: true },
      { feature: "Awards & recognition display with icons and motion", done: true },
      { feature: "Favourite recipes grid with CTA to view more", done: true },
      { feature: "Dynamic recipe listing with hover effects", done: true },
      { feature: "Filter/search bar for recipes (by tags, time, etc)", done: true },
      { feature: "Individual recipe slug pages with full details", done: true },
      { feature: "Meet the Team section with avatars and socials", done: true },
      { feature: "User testimonials section for social proof", done: true },
      { feature: "Static ratings from external review sites", done: true },
      { feature: "Reusable card components (recipes, team, testimonials)", done: true },
      { feature: "Clean, mobile-first layout and accessibility features", done: true },
    ],
    pages: [
      { feature: "Home (hero, awards, featured recipes, testimonials)", done: true },
      { feature: "Recipes (filterable grid of recipes)", done: true },
      { feature: "Recipe Slug (hero, detailed recipe info)", done: true },
      { feature: "About (brand story, team bios, optional contact)", done: true },
      { feature: "404 / Fallback (custom not found page)", done: true },
    ],
    techstack: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js (App Router)",
      "Tailwind CSS",
      "Framer Motion",
      "Git & GitHub",
      "RESTful APIs (static data simulated)",
      "Vercel (deployment)",
      "Accessibility (WCAG basics, alt text, semantic HTML)",
      "Basic SEO (metadata, OpenGraph tags)",
      "Responsive Design (mobile-first)",
      "Component Architecture",
      "Image Optimization (Next/Image)",
      "Static Site Generation (SSG)",
      "Mock Data & Dynamic Routing",
    ],
    gallery: [{ src: quickBitesImg1, alt: "Hero" }],
  },
  {
    title: "Weather Wizard",
    slug: "weather-wizard",
    cover: { src: weatherWizardImg3, alt: "Weather Wizard" },
    role: "Design & Development",
    repo: "https://github.com/OliverShenton/weather-tracker",
    projectType: "Web app",
    personalClient: "Personal",
    year: 2023,
    lastUpdated: "N/A",
    duration: "N/A",
    status: "Completed",
    demo: "",
    description:
      "A responsive weather tracking app built with React. It provides real-time weather updates, a five-day forecast, and quick access to popular world capitals. Designed with a simple, clean itnerfacem it makes it easy for users to check current conditions anywhere in the world.",
    problem:
      "Most weather apps are either too cluttered with information or locked behind premium subscriptions. I wanted to create a lightweight, accessible alternative that focuses on clarity and usability while practising API integration and UI development.",
    solution:
      "I designed and developed a weather tracker that consumes open weather APIs, with a focus on an intuitive interface. Users can search for any city, get weather for their current location, or quickly check common global destinations. A built-in dark mode ensures readability at any time of day.",
    audience: ["General users wanting to quick weather checks", "Travellers planning trips"],
    features: [
      { feature: "Date & time", done: true },
      { feature: "Dark mode toggle", done: true },
      { feature: "Location search bar", done: true },
      { feature: "Get current location", done: true },
      { feature: "Popular locations", done: true },
      { feature: "Current day forecast", done: true },
      { feature: "Five day forecast", done: true },
    ],
    pages: [{ feature: "Home - Search, popular cities, and forecasts", done: true }],
    techstack: ["HTML", "CSS", "JavaScript", "React", "Open Weather API"],
    gallery: [
      { src: weatherWizardImg1, alt: "Weather Wizard" },
      { src: weatherWizardImg2, alt: "Location picker" },
      { src: weatherWizardImg3, alt: "Location Search bar" },
      { src: weatherWizardImg4, alt: "Dark mode toggle" },
      { src: weatherWizardImg5, alt: "Dark mode & location" },
    ],
  },
  // {
  //   title: "Skill Foundry",
  //   slug: "skill-foundry",
  //   cover: {
  //     src: "",
  //     alt: "Screenshot of SkillFoundry dashboard and marketing site",
  //   },
  //   role: "Design & Development",
  //   repo: "",
  //   backgroundColor: "#0F172A", // slate/dark neutral
  //   projectType: "Marketing site + SaaS web app with authenticated dashboard.",
  //   personalClient: "Personal",
  //   year: 2025,
  //   lastUpdated: "2025-09-01",
  //   duration: "4 weeks",
  //   status: "In Progress",
  //   demo: "",
  //   description:
  //     "SkillFoundry is a hands-on learning platform where junior developers complete scoped real-world projects, guided through planning, delivery, and publishing portfolio-ready case studies.",
  //   problem:
  //     "Junior developers often struggle to showcase real-world experience, while companies lack low-risk ways to evaluate them.",
  //   solution:
  //     "SkillFoundry bridges the gap with project briefs, structured workflows, mentor reviews, and verified portfolio case studies.",
  //   audience: [
  //     "Junior developers preparing for jobs",
  //     "Mentors and bootcamp instructors",
  //     "Companies evaluating candidates",
  //   ],
  //   features: [
  //     { feature: "Public marketing site with SEO-ready pages", done: true },
  //     { feature: "Browse and filter real project briefs", done: true },
  //     { feature: "Authenticated dashboard with project workflow", done: true },
  //     { feature: "Kanban task management with drag-and-drop", done: false },
  //     { feature: "File upload and inline mentor reviews", done: false },
  //     { feature: "Portfolio builder with one-click case study publishing", done: false },
  //     { feature: "Light/Dark mode toggle", done: true },
  //   ],
  //   pages: [
  //     { feature: "Home", done: true },
  //     { feature: "Browse Projects", done: true },
  //     { feature: "Project Detail", done: true },
  //     { feature: "Pricing", done: false },
  //     { feature: "Blog / Resources", done: false },
  //     { feature: "Case Study (public)", done: false },
  //     { feature: "Dashboard", done: true },
  //     { feature: "Workspace (kanban)", done: false },
  //     { feature: "Submissions & Reviews", done: false },
  //     { feature: "Profile & Portfolio", done: false },
  //     { feature: "Auth (Sign In/Up, Reset)", done: true },
  //   ],
  //   techstack: [
  //     "Next.js 14",
  //     "TypeScript",
  //     "React",
  //     "Tailwind CSS",
  //     "shadcn/ui + Radix UI",
  //     "React Query",
  //     "Zustand",
  //     "Supabase (Auth, DB, Storage)",
  //     "Vercel Deployment",
  //     "Jest + React Testing Library",
  //     "Playwright (e2e)",
  //     "GitHub Actions (CI/CD)",
  //   ],
  //   gallery: [
  //     { src: "", alt: "SkillFoundry Home Page" },
  //     {
  //       src: "",
  //       alt: "Browse Projects screen with filters",
  //     },
  //     {
  //       src: "",
  //       alt: "User dashboard with active projects",
  //     },
  //     { src: "", alt: "Case Study page preview" },
  //   ],
  // },

  // {
  //   title: "BookBarter",
  //   slug: "book-barter",
  //   cover: { src: bookBarterImg1, alt: "BookBarter Hero", caption: "" },
  //   role: "Design & Development",
  //   repo: "",
  //   backgroundColor: "#ffb347",
  //   projectType: "",
  //   personalClient: "Personal",
  //   year: 2025,
  //   lastUpdated: "",
  //   duration: "",
  //   status: "In Progress",
  //   demo: "",
  //   description: "",
  //   problem: "",
  //   solution: "",
  //   audience: [""],
  //   features: [{ feature: "", done: true }],
  //   pages: [{ feature: "", done: true }],
  //   techstack: [""],
  //   gallery: [{ src: bookBarterImg1, alt: "" }],
  // },

  // {
  //   title: "",
  //   slug: "",
  //   cover: { src: "", alt: "", caption: "" },
  //   role: "",
  //   repo: "",
  //   backgroundColor: "",

  //   projectType: "",
  //   personalClient: "",
  //   year: "",
  //   lastUpdated: "",
  //   duration: "",
  //   status: "",
  //   demo: "",

  //   description: "",
  //   problem: "",
  //   solution: "",
  //   audience: [""],

  //   features: [{ feature: "", done: true }],
  //   pages: [{ feature: "", done: true }],

  //   techstack: [""],

  //   gallery: [{ src: "", alt: "" }],
  // },

  // =======================================================================
  // =======================================================================
  // =======================================================================
  // =======================================================================
  // =======================================================================
];
