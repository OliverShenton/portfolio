type iconTextKey = "github" | "linkedin" | "email";

type iconBackgroundKey = "github" | "linkedin" | "email" | "phone" | "location" | "portfolio";

export const iconText: Record<iconTextKey, string> = {
  github: "hover:text-white",
  linkedin: "hover:text-[#0077b5]",
  email: "hover:text-[#1d4ed8]",
};

export const iconBackground: Record<iconBackgroundKey, string> = {
  github: "hover:bg-[#181717] hover:border-[#181717]",
  linkedin: "hover:bg-[#0077b5] hover:border-[#0077b5]",
  email: "hover:bg-[#1d4ed8] hover:border-[#1d4ed8]",
  phone: "hover:bg-[#22c55e] hover:border-[#22c55e]",
  location: "hover:bg-[#f97316] hover:border-[#f97316]",
  portfolio: "hover:bg-[#dc2626] hover:border-[#dc2626]",
};

export interface SocialItem {
  title: string;
  icon: React.ReactNode;
  href: string;
  textColor?: iconTextKey;
  backgroundColor: iconBackgroundKey;
}
