"use client";

import { socialsData } from "@/data/SocialData";
import { LinkButton } from "../global/Button";
import { motion } from "motion/react";

const FooterSocialNavigation = () => {
  return (
    <nav aria-label="footer-navigation">
      <ul className="flex items-center gap-4" aria-label="Social media links">
        {socialsData.map((link) => (
          <motion.li
            key={link.id}
            className="group"
            whileHover={{ scale: 1.15 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}>
            <LinkButton
              href={link.href}
              title={link.title}
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
