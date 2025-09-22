"use client";

import { useId } from "react";
import { GoSearch } from "react-icons/go";

interface TechstackSearchBarProps {
  value: string;
  onChange: (e: string) => void;
}

const searchBarStyle =
  "flex items-center gap-4 bg-[#171717] border border-[#404040] hover:border-[var(--card-border-hover)] p-4 rounded-2xl shadow-sm transition-colors focus-within:border-[var(--card-border-hover)]";

const TechstackSearchBar = ({ value, onChange }: TechstackSearchBarProps) => {
  const id = useId();

  return (
    <form
      role="search"
      aria-label="Tech stack search"
      className={searchBarStyle}
      onSubmit={(e) => e.preventDefault()}>
      {/* Search icon */}
      <GoSearch className="w-5 h-5 text-gray-400" aria-hidden="true" />

      {/* Hidden label for accessibility */}
      <label htmlFor="search" className="sr-only">
        Search tech stack
      </label>

      {/* Input */}
      <input
        type="search"
        id="search"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search through tech stack"
        className="flex-1 bg-transparent text-sm text-gray-200 placeholder-gray-500 focus:outline-none"
      />
    </form>
  );
};

export default TechstackSearchBar;
