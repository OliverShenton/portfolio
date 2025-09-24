"use client";

import ContactForm from "./ContactForm";
import Hr from "../global/CustomHr";
import { contactData } from "@/data/contactData";
import CardContainer from "../global/CardContainer";

const ContactFormContainer = () => {
  return (
    <CardContainer width className="flex flex-col md:flex-row gap-10 p-6 md:p-12">
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
          {contactData.map((c) => (
            <div key={c.title} className="flex items-center gap-4">
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
    </CardContainer>
  );
};

export default ContactFormContainer;
