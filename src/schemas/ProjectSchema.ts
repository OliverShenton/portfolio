import { StaticImageData } from "next/image";

export type Role = "Design & Development";
export type ProjectStatus = "Completed" | "In Progress" | "On Hold";

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
  duration: string;
  status: ProjectStatus;
  year: number;
  links: string;

  //   Context
  description: string;
  purpose: string;
  problem: string;
  audience: string;

  //   Image gallery
  gallery?: ImageItem[];
}

// demo: string;
// projectType: string;
// status: ProjectStatus;
//   year: number;
