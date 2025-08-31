import { useState } from "react";

const tech = ["All", "Foundation", "State", "Testing", "Access", "Backend"];
const levels = ["Core", "Capable", "Familiar", "Learning"];

const buttonClass =
  "px-3 sm:px-4 py-1 sm:py-2 border border-neutral-700 bg-[var(--card-background)] rounded-full sm:rounded-xl space-x-2 hover:brightness-110";

const Filter = () => {
  const [activeTech, setActiveTech] = useState("All");
  const [activeLevel, setActiveLevel] = useState("All");

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => {
          const selected = activeTech === t;
          return (
            <button
              key={t}
              onClick={() => setActiveTech(t)}
              className={`${buttonClass} ${selected ? "border-indigo-500 bg-indigo-500/10" : ""}`}
              aria-pressed={selected}>
              {t}
            </button>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-2">
        {["All", ...levels].map((l) => {
          const selected = activeLevel === l;
          return (
            <button
              key={l}
              onClick={() => setActiveLevel(l)}
              className={`${buttonClass} ${selected ? "border-emerald-500 bg-emerald-500/10" : ""}`}
              aria-pressed={selected}>
              {l}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
