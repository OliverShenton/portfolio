"use client";

import { navigationData } from "@/data/navigationData";
import { RouterButton } from "../global/Button";
import { usePathname } from "next/navigation";
import { FaCircle } from "react-icons/fa";
import HeaderSocialNavigation from "./HeaderSocialNavigation";

const activeDotStyle = "text-lime-400 text-sm w-2 h-2 rounded-full";

const activeLineStyle = (
  <span className="absolute left-1/2 -bottom-0.5 h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-amber-500 transform -translate-x-1/2" />
);

const HeaderDesktopNavigation = () => {
  const pathname = usePathname();
  return (
    <nav
      id="desktop-navigation"
      aria-label="Desktop navigation"
      className="hidden md:flex items-center gap-6">
      {/* Page links */}
      <ul className="flex items-center text-sm" aria-label="Page links">
        {navigationData.map((n) => {
          const isActive = pathname === n.href;
          return (
            <li key={n.label}>
              <RouterButton href={n.href} title={n.label} variant="header" className="group">
                {isActive && <FaCircle className={activeDotStyle} />}
                <span
                  className={`relative transition-colors duration-300 ${
                    isActive ? "text-[var(--text)]" : "text-[var(--secondary-text)]"
                  }`}>
                  {n.label} {activeLineStyle}
                </span>
              </RouterButton>
            </li>
          );
        })}
      </ul>

      {/* Navigation separator */}
      <div className="border-l border-[var(--secondary-text)] h-4 rounded-full" />

      <HeaderSocialNavigation />
    </nav>
  );
};

export default HeaderDesktopNavigation;
