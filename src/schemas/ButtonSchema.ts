export interface Base {
  children: React.ReactNode;
  className: string;
  ariaLabel: string;
  variant?: keyof typeof buttonVariants;
}

export interface ButtonProps extends Base {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface LinkButtonProps extends Base {
  href: string;
  title?: string;
  target?: string;
}

export interface RouterButtonProps extends Base {
  href: string;
  title?: string;
}

export const buttonVariants = {
  nothing: "",
  "header-social-link":
    "flex items-center justify-center p-2 text-xl transform transition-all duration-300 hover:scale-125",
  "footer-social-link":
    "flex items-center justify-center border border-neutral-800 text-gray-300 p-2 text-2xl transition-colors min-w-[48px] min-h-[48px] duration-300 rounded-xl",
  "primary-button":
    "px-6 py-4 rounded-xl font-medium flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-600 to-orange-500 text-white shadow-lg shadow-neutral-800 hover:bg-gradient-to-l hover:brightness-105 transition-all duration-300",
  "secondary-button":
    "px-6 py-4 rounded-xl font-medium flex items-center justify-center gap-2 border border-gray-500 text-gray-200 hover:border-white hover:text-white transition-all shadow-neutral-800 hover:brightness-150 shadow-lg curation-300",
  "more-button":
    "px-6 py-3 font-medium flex items-center gap-2 border border-gray-500 text-gray-200 hover:border-white hover:text-white transition-colors shadow-neutral-800 shadow-lg",
  "card-button":
    "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10",
  "hero-arrow-button":
    "p-3 rounded-full border border-neutral-800 bg-[#171b23] hover:brightness-200 transition-all duration-300",
  "project-card-button":
    "border border-gray-600 p-3 text-2xl rounded-xl bg-stone-900 hover:brightness-150 transition-all duration-300 flex gap-2 items-center justify-center",
};
