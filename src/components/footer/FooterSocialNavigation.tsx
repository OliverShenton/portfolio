"use client";

import { socialData } from "../../data/socialData";
import { LinkButton } from "../global/Button";
import { iconBackground } from "@/schema/SocialSchema";
import { motion } from "motion/react";

const FooterSocialNavigation = () => {
  return (
    <nav aria-label="Social media links">
      <ul
        className="flex flex-wrap items-center justify-center gap-6"
        aria-label="Social media links">
        {socialData.map((s) => (
          <motion.li key={s.title} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
            <LinkButton
              href={s.href}
              title={s.title}
              target="_blank"
              className={s.backgroundColor ? iconBackground[s.backgroundColor] : undefined}
              variant="footer-social">
              {s.icon}
            </LinkButton>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterSocialNavigation;
