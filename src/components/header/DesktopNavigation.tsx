import { homePageNavigationData } from "@/data/NavigationData";
import SocialNavigation from "./HeaderSocialNavigation";
import { RouterButton } from "../global/Button";
import { usePathname } from "next/navigation";
import { FaCircle } from "react-icons/fa";

const DesktopNavigation = () => {
  const pathname = usePathname();

  return (
    <nav
      id="desktop-navigation"
      aria-label="Desktop navigation"
      className="hidden md:flex items-center gap-6">
      <ul className="flex items-center gap-8 text-sm" aria-label="Page links">
        {homePageNavigationData.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.id}>
              <RouterButton
                href={link.href}
                ariaLabel={`${link.link} Page`}
                className="flex items-center gap-2">
                {isActive && <FaCircle className="text-lime-400 text-sm w-2 h-2 rounded-full" />}
                <span
                  className={`relative group ${
                    isActive ? "text-white" : "text-gray-300"
                  } transition-colors duration-300`}>
                  {link.link}
                  <span className="absolute left-1/2 -bottom-0.5 h-[2px] w-0 group-hover:w-full transition-all duration-300 bg-amber-500 transform -translate-x-1/2" />
                </span>
              </RouterButton>
            </li>
          );
        })}
      </ul>

      {/* Navigation separator */}
      <div className="border-l border-gray-600 h-4" />

      {/* Social links navigation */}
      <SocialNavigation />
    </nav>
  );
};

export default DesktopNavigation;
