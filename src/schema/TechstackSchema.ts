type Level = "Core" | "Capable" | "Familiar" | "Learning";

export const levelColor: Record<Level, string> = {
  Core: "bg-emerald-500",
  Capable: "bg-blue-500",
  Familiar: "bg-orange-500",
  Learning: "bg-red-500",
};

export interface TechItem {
  tech: string;
  level: Level;
}

export interface Techstack {
  techstack: string;
  tech: TechItem[];
}
