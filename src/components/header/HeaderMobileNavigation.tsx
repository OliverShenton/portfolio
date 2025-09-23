"use client";

import { navigationData } from "@/data/navigationData";
import { LinkButton, RouterButton } from "../global/Button";
import CustomHr from "../global/CustomHr";
import { socialData } from "@/data/socialData";
import { FocusTrap } from "focus-trap-react";
import { motion } from "motion/react";

const HeaderMobileNavigation = ({ onClose }: { onClose: () => void }) => {
  return (
    <FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true, escapeDeactivates: false }}>
      <motion.nav
        className="hamburger-menu fixed inset-0 flex md:hidden bg-[var(--background)]/100 z-40 min-h-[100dvh] items-center justify-center overflow-y-auto mt-16 py-8 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%", opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            e.preventDefault();
            onClose();
          }
        }}
        tabIndex={-1}>
        <div className="text-center space-y-6 py-16">
          <h2 className="text-sm text-gray-300">Page Links</h2>
          <ul aria-label="Page links">
            <li className="space-y-6">
              {navigationData.map((n) => (
                <RouterButton
                  key={n.label}
                  href={n.href}
                  title={n.label}
                  onClick={onClose}
                  className="text-lg">
                  {n.label}
                </RouterButton>
              ))}
            </li>
          </ul>
          <CustomHr />
          <h2 className="text-sm text-gray-300">Social Links</h2>
          <ul aria-label="Social media links" className="space-y-6">
            {socialData.slice(0, 3).map((s) => (
              <li key={s.title}>
                <LinkButton href={s.href} title={s.title} onClick={onClose} className="text-lg">
                  {s.title}
                </LinkButton>
              </li>
            ))}
          </ul>
          <CustomHr />
        </div>
      </motion.nav>
    </FocusTrap>
  );
};

export default HeaderMobileNavigation;

// import { homePageNavigationData } from "@/data/NavigationData";
// import { socialsData } from "@/data/SocialData";
// import { FocusTrap } from "focus-trap-react";
// import { motion } from "motion/react";
// import { useEffect, useRef } from "react";

// const MobileNavigation = ({ onClose }: { onClose: () => void }) => {
//   // Ref
//   const containerRef = useRef<HTMLDivElement>(null);

//   // Auto focus on menu container on mount
//   useEffect(() => {
//     containerRef.current?.focus();
//   }, []);

//   return (
//     <FocusTrap focusTrapOptions={{ clickOutsideDeactivates: true, escapeDeactivates: false }}>
//       <motion.div
//         ref={containerRef}
// role="dialog"
// aria-modal="true"
//         aria-label="Mobile navigation menu"
//         className="hamburger-menu fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-gradient-to-b from-[var(--background)]/95 to-[var(--background)]/80 backdrop-blur-md px-4 overflow-y-auto pt-15 pb-6"
// initial={{ y: "-100%", opacity: 0 }}
// animate={{ y: 0, opacity: 1 }}
// exit={{ y: "-100%", opacity: 0 }}
// transition={{ duration: 0.3, ease: "easeInOut" }}
//         // Close menu on escape
// onKeyDown={(e) => {
//   if (e.key === "Escape") {
//     e.preventDefault();
//     onClose();
//   }
// }}
// tabIndex={-1}>
//         {/* hr */}
//         <hr className="border-gray-500/40 h-[1px] w-full" />

//         {/* Page links */}
//         <div className="flex flex-col gap-12 text-center">
//           <h2 className="text-xs uppercase tracking-widest text-gray-400">Page Links</h2>
//           <div className="flex flex-col gap-12 text-lg sm:text-xl" aria-label="Page links">
//             {homePageNavigationData.map((link) => (
//               <a
//                 key={link.id}
//                 href={link.href}
//                 onClick={onClose}
//                 className="transition-colors duration-300 hover:text-amber-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400">
//                 {link.link}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* hr */}
//         <hr className="border-gray-500/40 h-[1px] w-full" />

//         {/* Social links */}
//         <div className="flex flex-col gap-12 text-center">
//           <h2 className="text-xs uppercase tracking-widest text-gray-400">Follow Me</h2>
//           <div className="flex gap-12 text-3xl sm:text-4xl" aria-label="Social links">
//             {socialsData.slice(0, 3).map((social) => (
//               <a
//                 key={social.id}
//                 href={social.href}
//                 title={social.title}
//                 onClick={onClose}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 hover:scale-110 ${social.hoverText}`}>
//                 {social.icon}
//               </a>
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     </FocusTrap>
//   );
// };

// export default MobileNavigation;
