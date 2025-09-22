import { StaticImageData } from "next/image";

export type Role = "Design" | "Development" | "Design & Development";
export type Client = "Freelance" | "Personal" | "Company";
export type Status = "Completed" | "In Progress" | "On Hold";

export interface ImageItem {
  src: StaticImageData | string;
  alt: string;
}

export interface FeatureItem {
  feature: string;
  completed: boolean;
}

export interface UpdateItem {
  date: string;
  description: string;
}

export interface ProjectCard {
  title: string;
  slug: string;
  cover: ImageItem;
  role: Role;
  repo: string;
}

export interface ProjectCasestudy extends ProjectCard {
  projectType: string;
  client: Client;
  year: number;
  duration: string;
  lastUpdated: string;
  status: Status;
  demo: string;

  description: string;
  audience: string[];

  features: FeatureItem[];
  pages: FeatureItem[];

  techstack: string[];

  gallery: ImageItem[];

  updateHistory: UpdateItem[];
}
