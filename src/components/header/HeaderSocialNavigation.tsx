"use client";

import { socialsData } from "@/data/SocialData";
import { LinkButton } from "../global/Button";

const HeaderSocialNavigation = () => {
  return (
    <ul className="flex items-center gap-2" aria-label="Social media links">
      {socialsData.slice(0, 3).map((link) => (
        <li key={link.id} className="group">
          <LinkButton
            href={link.href}
            title={link.title}
            target="_blank"
            variant="header-social-link"
            className={link.hoverText}>
            {link.icon}
          </LinkButton>
        </li>
      ))}
    </ul>
  );
};

export default HeaderSocialNavigation;
