"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import HeaderDesktopNavigation from "./HeaderDesktopNavigation";
import HeaderMobileNavigation from "./HeaderMobileNavigation";
import HeaderTitle from "./HeaderTitle";
import { useEffect, useState } from "react";
import { Button } from "../global/Button";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 10);
  });

  const toggleMenu = () => setOpenMenu((prev) => !prev);

  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openMenu]);

  const headerStyle =
    scrolled || openMenu
      ? "backdrop-blur-md bg-[var(--background)]/50 text-[var(--text)] shadow-sm shadow-white/10"
      : "bg-transparent text-[var(--secondary-text)]";

  return (
    <>
      <header className={`fixed w-full z-50 ${headerStyle}`}>
        <div className="max-w-[88rem] mx-auto flex items-center justify-between">
          <HeaderTitle />
          {/* Visible on desktop, invisible on mobile */}
          <HeaderDesktopNavigation />
          {/* Visible on mobile, invisible on desktop */}
          <motion.div
            className="flex md:hidden text-3xl px-4 py-4 md:px-6"
            animate={{ rotate: openMenu ? -90 : 0 }}>
            <Button onClick={toggleMenu}>
              <RxHamburgerMenu />
            </Button>
          </motion.div>
        </div>
        <motion.div
          id="scroll-indicator"
          aria-hidden="true"
          className="absolute left-0 right-0 bottom-0 h-[2px]"
          style={{ originX: 0, scaleX: scrollYProgress, backgroundColor: "#ff0088" }}
        />
      </header>

      <AnimatePresence initial={false} mode="wait">
        {openMenu && <HeaderMobileNavigation onClose={toggleMenu} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
