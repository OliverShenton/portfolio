import { socialData } from "@/data/socialData";
import { LinkButton } from "../global/Button";
import { iconText } from "@/schema/SocialSchema";

const HeaderSocialNavigation = () => {
  return (
    <ul className="flex items-center text-xl pr-4 md:pr-6" aria-label="Social media links">
      {socialData.slice(0, 3).map((s) => (
        <li key={s.title}>
          <LinkButton
            href={s.href}
            title={s.title}
            target="_blank"
            className={s.textColor ? iconText[s.textColor] : undefined}
            variant="header-social">
            {s.icon}
          </LinkButton>
        </li>
      ))}
    </ul>
  );
};

export default HeaderSocialNavigation;
