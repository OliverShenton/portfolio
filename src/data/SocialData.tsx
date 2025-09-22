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
    // variant: "footer-social-link",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/olivershenton/",
    textColor: "linkedin",
    backgroundColor: "linkedin",
    // variant: "footer-social-link",
  },
  {
    title: "Email",
    icon: <MdEmail />,
    href: "mailto:olivermshenton@outlook.com",
    textColor: "email",
    backgroundColor: "email",
    // variant: "footer-social-link",
  },
  {
    title: "Phone",
    icon: <FaPhone />,
    href: "tel:+447473826533",
    backgroundColor: "phone",
    // variant: "footer-social-link",
  },
  {
    title: "Location",
    icon: <FaLocationDot />,
    href: "https://www.google.com/maps/place/Sandbach/",
    backgroundColor: "location",
    // variant: "footer-social-link",
  },
  {
    title: "Portfolio PDF",
    icon: <FaFilePdf />,
    href: "https://github.com/OliverShenton/cv/blob/main/Oliver%20Shenton.pdf",
    backgroundColor: "portfolio",
    // variant: "footer-social-link",
  },
];
