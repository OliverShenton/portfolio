"use client";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import ContactForm from "./ContactForm";
import Hr from "../global/Hr";
import { motion } from "motion/react";
import CardBase from "../global/CardBase";

const contactDetails = [
  {
    id: 1,
    icon: <FaPhoneAlt size={25} />,
    title: "Call Me",
    text: "(+44)7473826533",
    href: "tel:+447473826533",
  },
  {
    id: 2,
    icon: <MdEmail size={25} />,
    title: "Email Me",
    text: "olivermshenton@outlook.com",
    href: "mailto:olivermshenton@outlook.com",
  },
  {
    id: 3,
    icon: <FaLocationDot size={25} />,
    title: "My Address",
    text: "Sandbach, Cheshire, CW11",
    href: "https://www.google.com/maps/place/Sandbach/",
  },
];

const ContactCard = () => {
  return (
    <CardBase animated className="flex flex-col md:flex-row gap-10 p-6 md:p-12">
      {/* Left side */}
      <div className="flex-1 w-full">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-4 font-semibold text-left">
          Get In Touch.
        </h2>
        <p className="text-xl sm:text-2xl md:text-3xl text-left mb-10 md:mb-15">
          Let&apos;s build something <span className="text-blue-500">great</span> together.
        </p>

        {/* Quick contact links */}
        <address className="grid gap-6 md:gap-8">
          {contactDetails.map((c) => (
            <div key={c.id} className="flex items-center gap-4">
              <span>{c.icon}</span>
              <a
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base text-blue-500 hover:text-blue-700 transition-transform duration-300">
                {c.text}
              </a>
            </div>
          ))}
        </address>
      </div>
      {/* Mobile divider */}
      <div className="block md:hidden">
        <Hr />
      </div>
      {/* Right side */}
      <div className="flex-1 w-full">
        <ContactForm />
      </div>
    </CardBase>
    // <motion.article
    //   className="text-center border bg-[var(--card-background)] border w-full rounded-xl flex flex-col md:flex-row gap-10 md:gap-15 shadow-sm shadow-black p-6 md:p-12 z-10"
    //   initial={{ y: 20, opacity: 0 }}
    //   animate={{ y: 0, opacity: 1 }}
    //   transition={{ delay: 0.1, duration: 0.3 }}>

    // </motion.article>
    //
  );
};

export default ContactCard;
