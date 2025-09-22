"use client";

import TechstackCard from "./TechstackCard";
import TechstackSearchBar from "./TechstackSearchBar";
import { useMemo, useState } from "react";
import { TechItem, Techstack as TechstackProps } from "@/schema/TechstackSchema";
import { useDebounce } from "../hooks/useDebounce";
import { techstackData } from "@/data/techstackData";

// Change queries to lowercase
const lowercaseString = (s: string) => {
  return s.toLowerCase().normalize("NFKD");
};

const TechstackGrid = () => {
  const [rawQuery, setRawQuery] = useState("");

  // Debounce query searches
  const query = useDebounce(rawQuery, 200);

  // Filter grid according to query
  const filteredGrid: TechstackProps[] = useMemo(() => {
    const q = lowercaseString(query);
    if (!q) return techstackData;

    return techstackData
      .map((t) => {
        const items = t.tech.filter((item: TechItem) => lowercaseString(item.tech).includes(q));
        return { ...t, tech: items };
      })
      .filter((t) => t.tech.length > 0);
  }, [query]);

  // ToDo
  // Accessiblity function
  const resultCount = useMemo(() => {
    filteredGrid.reduce((sum, s) => sum + s.tech.length, 0);
  }, [filteredGrid]);

  return (
    <div className="w-full z-10">
      {/* Search bar */}
      <TechstackSearchBar value={rawQuery} onChange={setRawQuery} />

      {/* Filtered grid */}
      {filteredGrid.length === 0 ? (
        <p className="mt-6 text-sm text-gray-400">No matches. Try another term.</p>
      ) : (
        filteredGrid.map((f) => (
          <div key={f.techstack} className={`space-y-4 mt-8 sm:mt-10 md:mt-12`}>
            <h3 className="text-lg font-semibold">{f.techstack}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mb-8 sm:mb-10 md:mb-12">
              {f.tech.map((t) => (
                <TechstackCard key={t.tech} tech={t.tech} level={t.level} />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TechstackGrid;
