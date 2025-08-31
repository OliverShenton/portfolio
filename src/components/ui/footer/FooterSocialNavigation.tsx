"use client";

import { socialsData } from "@/data/SocialData";
import { LinkButton } from "../global/Button";
import { motion } from "motion/react";

const FooterSocialNavigation = () => {
  return (
    <nav aria-label="Social media links" className="z-10">
      <ul className="flex flex-wrap items-center justify-center gap-6">
        {socialsData.map((link) => (
          <motion.li key={link.id} whileHover={{ y: -5 }} transition={{ duration: 0.15 }}>
            <LinkButton
              href={link.href}
              title={link.title}
              ariaLabel={link.title}
              target="_blank"
              variant={link.variant as "footer-social-link"}
              className={`${link.hoverColor} hover:text-[var(--text)]`}>
              {link.icon}
            </LinkButton>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterSocialNavigation;
