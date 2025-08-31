// Section container

export interface SectionContainer {
  id: string;
  children: React.ReactNode;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  fullScreen?: boolean;
  relative?: boolean;
  className?: string;
}

// Section title

export type MarkerColor = "rose" | "amber" | "emerald" | "indigo";

export const markerColor: Record<MarkerColor, string> = {
  rose: "border-rose-500 text-rose-500",
  amber: "border-amber-500 text-amber-500",
  emerald: "border-emerald-500 text-emerald-500",
  indigo: "border-indigo-500 text-indigo-500",
};

export interface SectionTitle {
  title: string;
  subtitle: string;
  marker: MarkerColor;
}
