import { SocialItem } from "@/schema/SocialSchema";
import { FaFilePdf, FaGithub, FaLinkedinIn, FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const socialData: SocialItem[] = [
  {
    title: "Github",
    icon: <FaGithub />,
    href: "https://github.com/OliverShenton",
    textColor: "github",
    backgroundColor: "github",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/olivershenton/",
    textColor: "linkedin",
    backgroundColor: "linkedin",
  },
  {
    title: "Email",
    icon: <MdEmail />,
    href: "mailto:olivermshenton@outlook.com",
    textColor: "email",
    backgroundColor: "email",
  },
  {
    title: "Phone",
    icon: <FaPhone />,
    href: "tel:+447473826533",
    backgroundColor: "phone",
  },
  {
    title: "Location",
    icon: <FaLocationDot />,
    href: "https://www.google.com/maps/place/Sandbach/",
    backgroundColor: "location",
  },
  {
    title: "Portfolio PDF",
    icon: <FaFilePdf />,
    href: "https://github.com/OliverShenton/cv/blob/main/Oliver%20Shenton.pdf",
    backgroundColor: "portfolio",
  },
];
