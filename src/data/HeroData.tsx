"use client";

import { FaCode } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";

export const HeroButtonData = [
  {
    id: 1,
    icon: <FaCode />,
    label: "See My Work",
    href: "#projects",
    className:
      "text-lg bg-gradient-to-r from-[var(--highlight)] to-[var(--secondary-highlight)] text-[var(--background)] hover:bg-gradient-to-br shadow-sm shadow-black/70 hover:shadow-md transition-shadow",
  },
  {
    id: 2,
    icon: <IoIosContact />,
    label: "Get In Touch",
    href: "#contact",
    className:
      "text-lg border border-gray-400/40 text-black/80 bg-white/60 backdrop-blur-md hover:bg-white/80 shadow-sm shadow-black/70 hover:shadow-md transition-shadow",
  },
];

export const HeroSocialLinks = [
  { id: 1, text: "Github", href: "" },
  { id: 2, text: "LinkedIn", href: "" },
  { id: 3, text: "Email", href: "" },
];
