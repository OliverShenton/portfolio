import { StaticImageData } from "next/image";

export type Role = "Design & Development";
export type ProjectStatus = "Completed" | "In Progress" | "On Hold";
export type PersonalClient = "Personal" | "Client";

export interface FeatureItem {
  feature: string;
  done: boolean;
}

export interface TechItem {}

export interface ImageItem {
  src: StaticImageData | string;
  alt: string;
  caption?: string;
}

export interface ProjectCard {
  title: string;
  slug: string;
  cover: ImageItem;
  role: Role;
  repo: string;
  backgroundColor?: string;
}

export interface ProjectCaseStudy extends ProjectCard {
  // Overview
  projectType: string;
  personalClient: PersonalClient;
  year: number;
  lastUpdated: string;
  duration: string;
  status: ProjectStatus;
  demo: string;

  //   Context
  description: string;
  problem: string;
  solution: string;
  audience: string[];

  // Scope
  features: FeatureItem[];
  pages: FeatureItem[];

  // Tech stack
  techstack: string[];

  //   Image gallery
  gallery?: ImageItem[];
}

// demo: string;
// projectType: string;
// status: ProjectStatus;
//   year: number;
