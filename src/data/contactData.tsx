import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export const contactData = [
  {
    icon: <FaPhoneAlt size={25} />,
    title: "Call Me",
    text: "(+44)7473826533",
    href: "tel:+447473826533",
  },
  {
    icon: <MdEmail size={25} />,
    title: "Email Me",
    text: "olivermshenton@outlook.com",
    href: "mailto:olivermshenton@outlook.com",
  },
  {
    icon: <FaLocationDot size={25} />,
    title: "My Address",
    text: "Sandbach, Cheshire, CW11",
    href: "https://www.google.com/maps/place/Sandbach/",
  },
];
