import { MindfulPathCasestudy } from "@/data/case-studies/MindfulPath-case-study";
import { PortfolioCasestudy } from "@/data/case-studies/Portfolio-Casestudy";
import { QuickBitesCasestudy } from "@/data/case-studies/QuickBites-Casestudy";
import { WeatherWizardCasestudy } from "@/data/case-studies/WeatherWizard-Casestudy";
import { ProjectCasestudy } from "@/schema/ProjectSchema";

const AllProjects: ProjectCasestudy[] = [
  ...PortfolioCasestudy,
  ...MindfulPathCasestudy,
  ...QuickBitesCasestudy,
  ...WeatherWizardCasestudy,
];

export const GetAllProjects = () => {
  return AllProjects;
};
