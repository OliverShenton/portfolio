import {
  BaseButton as ButtonProps,
  buttonVariants,
  LinkButton as LinkButtonProps,
  RouterButton as RouterButtonProps,
} from "@/schema/ButtonSchema";
import Link from "next/link";

const baseButtonStyle =
  "min-w-[44px] min-h-[44px] cursor-pointer rounded-xl flex items-center justify-center transition-all duration-300 font-medium pointer-events-auto";

export const Button = ({
  children,
  className,
  variant = "nothing",
  role = "button",
  onClick,
}: ButtonProps) => {
  return (
    <button
      role={role}
      onClick={onClick}
      className={`${className} ${baseButtonStyle} ${buttonVariants[variant]}`}>
      {children}
    </button>
  );
};

export const LinkButton = ({
  children,
  className,
  variant = "nothing",
  href,
  target = "_blank",
  role = "link",
  title,
  onClick,
}: LinkButtonProps) => {
  return (
    <a
      href={href}
      target={target}
      onClick={onClick}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      role={role}
      title={title}
      className={`${className} ${baseButtonStyle} ${buttonVariants[variant]}`}>
      {children}
    </a>
  );
};

export const RouterButton = ({
  children,
  className,
  variant = "nothing",
  href,
  role = "link",
  title,
  onClick,
}: RouterButtonProps) => {
  return (
    <Link
      href={href}
      role={role}
      title={title}
      onClick={onClick}
      className={`${className} ${baseButtonStyle} ${buttonVariants[variant]}`}>
      {children}
    </Link>
  );
};
