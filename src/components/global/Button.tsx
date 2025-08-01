"use client";

import { motion } from "motion/react";

type LinkButtonProps = {
  children: React.ReactNode;
  href: string;
  title?: string;
  target?: string;
  ariaLabel?: string;
  className?: string;
  variant?: keyof typeof buttonVariants;
};

type ButtonProps = {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  ariaLabel?: string;
  variant?: keyof typeof buttonVariants;
};

// Global Style
const buttonStyle =
  "cursor-pointer focus-outline-none focus-visible:ring-4 focus-visible:ring-blue-500";

// Variants
const buttonVariants = {
  nothing: "",
  "navigation-link":
    "transitions-colors duration-300 hover:text-amber-500 hover:underline underline-offset-4",
  "header-social-link":
    "flex items-center justify-center p-2 text-xl transform transition-all duration-300 hover:scale-125",
  "footer-social-link":
    "flex items-center justify-center border p-2 text-2xl transition-colors duration-300 rounded-full",
  "primary-button":
    "px-6 py-3 rounded-xl font-medium flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-orange-500 text-white shadow-lg shadow-neutral-800 hover:bg-gradient-to-l hover:brightness-105 transition-all",
  "secondary-button":
    "px-6 py-3 rounded-xl font-medium flex items-center gap-2 border border-gray-500 text-gray-200 hover:border-white hover:text-white transition-colors shadow-neutral-800 shadow-lg",
  "contact-button":
    "px-4 py-2 rounded-xl font-medium flex items-center gap-2 bg-gradient-to-r from-yellow-600 to-orange-500 text-white shadow-lg shadow-neutral-800 hover:bg-gradient-to-l hover:brightness-105 transition-all",
  "more-button":
    "px-6 py-3 font-medium flex items-center gap-2 border border-gray-500 text-gray-200 hover:border-white hover:text-white transition-colors shadow-neutral-800 shadow-lg",
  "card-button":
    "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10",
  "hero-arrow-button":
    "p-3 rounded-full border border-[var(--tertiary-highlight)] bg-[#141414] hover:brightness-150 transition-all duration-300",
  "project-card-button":
    "border border-gray-600 p-3 text-3xl rounded-xl bg-stone-900 hover:brightness-100",
};

// Link button
export const LinkButton = ({
  children,
  href,
  title,
  target,
  ariaLabel,
  className,
  variant = "nothing",
  ...props
}: LinkButtonProps) => {
  return (
    <motion.a
      href={href}
      title={title}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      role="button"
      aria-label={ariaLabel}
      className={`${className} ${buttonStyle} ${buttonVariants[variant]}`}
      {...props}>
      {children}
    </motion.a>
  );
};

// Normal button
export const Button = ({
  children,
  onClick,
  ariaLabel,
  className,
  variant = "nothing",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${className} ${buttonStyle} ${buttonVariants[variant]}`}>
      {children}
    </button>
  );
};
