type Level = "Core" | "Capable" | "Familiar" | "Learning";

export const levelColor: Record<Level, string> = {
  Core: "text-green-500",
  Capable: "text-blue-500",
  Familiar: "text-amber-500",
  Learning: "text-red-500",
};

export interface Techstack {
  tech: string;
  level: Level;
}
