import { useEffect, useState } from "react";
import logoImg from "../../assets/logo.png";
import NavBar from "./NavBar";
import ThemeToggle from "./ThemeToggle";
import Dropdown from "./Dropdown";

export default function Header() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const textColor = "text-[#333] dark:text-[#eaeaea]";

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });

  return (
    <header className="w-full fixed bg-[#eaeaea] dark:bg-[#1c1c1c] z-50 shadow-md">
      <div className={`flex items-center justify-between max-w-6xl mx-auto p-4 ${textColor}`}>
        <div className="flex items-center gap-4">
          <img src={logoImg} className="w-10 h-auto flex-shrink-0" alt="Oliver Shenton's logo" />
          <h1 className="text-xl font-bold hidden small:block">Oliver Shenton</h1>
        </div>
        <div className="flex items-center gap-4">
          <NavBar />
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <Dropdown />
        </div>
      </div>
    </header>
  );
}
