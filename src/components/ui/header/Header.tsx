"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";
import Link from "next/link";

const Header = () => {
  // State and Refs
  const [openMenu, setOpenMenu] = useState(false);
  const [scrolledProgress, setScrolledProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const headerStyle = !scrolled
    ? "bg-transparent text-[var(--secondary-text)]"
    : "backdrop-blur-md bg-[var(--background)]/60 text-[var(--text)] shadow-sm ring-1 ring-white/10";

  // Scroll progress hook
  useEffect(() => {
    let ticking = false;

    // Scroll hook
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const pageHeight = document.body.scrollHeight - window.innerHeight;
          const progress = (scrollTop / pageHeight) * 100;

          setScrolledProgress(progress);
          setScrolled(scrollTop > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hamburger menu overflow hook
  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openMenu]);

  // ToggleMenu function
  const toggleMenu = () => setOpenMenu((prev) => !prev);

  // CloseMenu function
  const closeMenu = () => {
    setOpenMenu(false);
    setTimeout(() => {
      buttonRef.current?.focus();
    }, 100);
  };

  return (
    <>
      <header id="header" role="banner" className={`fixed top-0 left-0 w-full z-50 ${headerStyle}`}>
        <div className="max-w-[88rem] mx-auto flex items-center justify-between p-4 md:px-6">
          {/* Title */}
          <Link href="/">
            <h1 className="text-xl md:text-2xl z-50 uppercase font-bold cursor-pointer hover:text-amber-500 transition-colors duration-300">
              Oliver Shenton
            </h1>
          </Link>

          {/* Navigation menus */}
          {/* Mobile menu toggle */}
          <div className="flex items-center md:hidden z-40 px-4">
            <motion.button
              aria-label={openMenu ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={openMenu}
              aria-controls="mobile-navigation-dropdown"
              onClick={toggleMenu}
              ref={buttonRef}
              className="relative w-6 h-6 z-50 flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 hover:text-amber-500 transition-colors duration-300 cursor-pointer">
              {/* Top Line */}
              <motion.span
                className="absolute w-6 h-0.5 bg-current"
                animate={{
                  rotate: openMenu ? 45 : 0,
                  y: openMenu ? 0 : -6,
                }}
                transition={{ duration: 0.25 }}
              />
              {/* Middle Line */}
              <motion.span
                className="absolute w-6 h-0.5 bg-current"
                animate={{
                  opacity: openMenu ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
              {/* Bottom Line */}
              <motion.span
                className="absolute w-6 h-0.5 bg-current"
                animate={{
                  rotate: openMenu ? -45 : 0,
                  y: openMenu ? 0 : 6,
                }}
                transition={{ duration: 0.25 }}
              />
            </motion.button>
          </div>

          {/* Desktop navigation */}
          <DesktopNavigation />
        </div>

        {/* Scroll Progress Bar */}
        <span
          className="absolute bottom-0 left-0 h-[2px] bg-amber-500"
          style={{ width: `${scrolledProgress}%` }}
        />
      </header>

      {/* Mobile menu */}
      <nav
        id="mobile-navigation-dropdown"
        aria-label="Mobile navigation dropdown"
        className="flex gap-6 text-gray-300 z-40">
        <AnimatePresence>{openMenu && <MobileNavigation onClose={closeMenu} />}</AnimatePresence>
      </nav>
    </>
  );
};

export default Header;
