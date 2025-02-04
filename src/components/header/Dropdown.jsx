import { useState } from "react";
import NavBar from "./NavBar";

export default function Dropdown() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const spanClass =
    "absolute h-[2px] w-2/3 transform transition-all duration-500 ease-in-out bg-[#333] dark:bg-white";

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#technology", label: "Technology" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <div
        className="relative small:hidden w-8 h-8 flex flex-col justify-center items-center cursor-pointer bg-white dark:bg-zinc-500 rounded-lg p-4 z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span
          className={`${spanClass} ${
            isMenuOpen ? "rotate-45 translate-y-[0px]" : "translate-y-[-8px]"
          }`}></span>
        <span className={`${spanClass} ${isMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
        <span
          className={`${spanClass} ${
            isMenuOpen ? "-rotate-45 translate-y-[0px]" : "translate-y-[8px]"
          }`}></span>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-40"
          onClick={() => setIsMenuOpen(false)}>
          <div className="text-center">
            {navLinks.map((item, index) => (
              <li
                key={index}
                className="text-white flex flex-col list-none hover:text-blue-500 dark:hover:text-yellow-500 uppercase gap-4 text-sm mb-4">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
