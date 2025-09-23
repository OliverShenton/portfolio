import React from "react";

export interface BaseButton {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  variant?: "nothing" | "primary" | "secondary" | "header" | "header-social" | "footer-social";
  role?: "button" | "link" | "submit";
  onClick?: () => void;
}

export interface LinkButton extends BaseButton {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
  title: string;
}

export interface RouterButton extends BaseButton {
  href: string;
  title: string;
}

export const buttonVariants = {
  nothing: "",
  primary:
    "bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 hover:bg-gradient-to-l px-6 py-4",
  secondary: "w-full border border-[var(--button-border)] hover:brightness-150 px-6 py-4 text-xl",
  header: "px-4 py-4 md:px-6 gap-2",
  "header-social": "hover:scale-125 ease-out",
  "footer-social": "border border-[var(--button-border)] text-2xl p-2 rounded-xl",
};
