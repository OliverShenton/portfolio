import { homePageNavigationData } from "@/data/NavigationData";
import SocialNavigation from "./HeaderSocialNavigation";
import { LinkButton } from "../global/Button";
import { useEffect, useState } from "react";

type DesktopNavigationProps = {
  activeSection: string;
};

const DesktopNavigation = ({ activeSection }: DesktopNavigationProps) => {
  return (
    <nav
      id="desktop-navigation"
      aria-label="Desktop navigation"
      className="hidden md:flex items-center gap-6">
      <ul className="flex items-center gap-8 text-sm" aria-label="Page links">
        {/* Home page navigation */}
        {homePageNavigationData.map((link) => (
          <li key={link.id}>
            <LinkButton href={link.href} variant="navigation-link">
              {link.link}
            </LinkButton>
          </li>
        ))}
      </ul>

      {/* Navigation seperator */}
      <div className="border-l border-gray-600 h-4" />

      {/* Social links navigation */}
      <SocialNavigation />
    </nav>
  );
};

export default DesktopNavigation;
