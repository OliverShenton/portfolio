type Level = "Core" | "Capable" | "Familiar" | "Learning";

export const levelColor: Record<Level, string> = {
  Core: "text-green-400",
  Capable: "text-blue-400",
  Familiar: "text-amber-400",
  Learning: "text-red-400",
};

export const hoverColor: Record<Level, string> = {
  Core: "group-hover:text-green-500",
  Capable: "group-hover:text-blue-500",
  Familiar: "group-hover:text-amber-500",
  Learning: "group-hover:text-red-500",
};

export interface Techstack {
  tech: string;
  level: Level;
}
