import { FaFilePdf, FaGithub, FaLinkedinIn, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const SocialsData = [
  {
    id: 1,
    title: "Github",
    icon: <FaGithub />,
    href: "https://github.com/OliverShenton",
    hoverColor: "hover:bg-[#181717] hover:border-[#181717]",
    hoverText: "hover:text-[#181717] ",
  },
  {
    id: 2,
    title: "LinkedIn",
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/olivershenton/",
    hoverColor: "hover:bg-[#0077b5] hover:border-[#0077b5]",
    hoverText: "hover:text-[#0077b5] ",
  },
  {
    id: 3,
    title: "Email",
    icon: <MdEmail />,
    href: "mailto:olivermshenton@outlook.com",
    hoverColor: "hover:bg-[#1d4ed8] hover:border-[#1d4ed8]",
    hoverText: "hover:text-[#1d4ed8] ",
  },
  {
    id: 4,
    title: "Phone",
    icon: <FaPhone />,
    href: "tel:+447473826533",
    hoverColor: "hover:bg-[#22c55e] hover:border-[#22c55e]",
  },
  {
    id: 5,
    title: "Location",
    icon: <FaLocationDot />,
    href: "https://www.google.com/maps/place/Sandbach/",
    hoverColor: "hover:bg-[#f97316] hover:border-[#f97316]",
  },
  {
    id: 6,
    title: "Portfolio PDF",
    icon: <FaFilePdf />,
    href: "https://github.com/OliverShenton/cv/blob/main/Oliver%20Shenton.pdf",
    hoverColor: "hover:bg-[#dc2626] hover:border-[#dc2626]",
  },
];
