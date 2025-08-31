"use client";

import {
  ButtonProps,
  buttonVariants,
  LinkButtonProps,
  RouterButtonProps,
} from "@/schemas/ButtonSchema";
import { motion } from "motion/react";
import Link from "next/link";

// Global Style
const buttonStyle =
  "cursor-pointer focus-outline-none focus-visible:ring-4 focus-visible:ring-blue-500 max-w-[250px] mx-auto w-full z-10";
// };

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

// Router button
export const RouterButton = ({
  href,
  children,
  title,
  className,
  ariaLabel,
  variant = "nothing",
}: RouterButtonProps) => {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      title={title}
      className={`${className} ${buttonStyle} ${buttonVariants[variant]}`}>
      {children}
    </Link>
  );
};
