import { homePageNavigationData } from "@/data/NavigationData";
import { socialsData } from "@/data/SocialData";
import { FocusTrap } from "focus-trap-react";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

const MobileNavigation = ({ onClose }: { onClose: () => void }) => {
  // Ref
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto focus on menu container on mount
  useEffect(() => {
    containerRef.current?.focus();
  }, []);

  return (
    <FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true, escapeDeactivates: false }}>
      <motion.div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className="hamburger-menu fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-gradient-to-b from-[var(--background)]/95 to-[var(--background)]/80 backdrop-blur-md px-4 overflow-y-auto pt-15 pb-6"
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "-100%", opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        // Close menu on escape
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            e.preventDefault();
            onClose();
          }
        }}
        tabIndex={-1}>
        {/* hr */}
        <hr className="border-gray-500/40 h-[1px] w-full" />

        {/* Page links */}
        <div className="flex flex-col gap-6 text-center">
          <h2 className="text-xs uppercase tracking-widest text-gray-400">Page Links</h2>
          <div className="flex flex-col gap-6 text-lg sm:text-xl" aria-label="Page links">
            {homePageNavigationData.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={onClose}
                className="transition-colors duration-300 hover:text-amber-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">
                {link.link}
              </a>
            ))}
          </div>
        </div>

        {/* hr */}
        <hr className="border-gray-500/40 h-[1px] w-full" />

        {/* Social links */}
        <div className="flex flex-col gap-6 text-center">
          <h2 className="text-xs uppercase tracking-widest text-gray-400">Follow Me</h2>
          <div className="flex gap-12 text-3xl sm:text-4xl" aria-label="Social links">
            {socialsData.slice(0, 3).map((social) => (
              <a
                key={social.id}
                href={social.href}
                title={social.title}
                onClick={onClose}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 hover:scale-110 ${social.hoverText}`}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </FocusTrap>
  );
};

export default MobileNavigation;
