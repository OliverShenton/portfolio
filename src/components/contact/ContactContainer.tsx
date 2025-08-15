import { FaPhoneAlt } from "react-icons/fa";
import CardContainer from "../global/CardContainer";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import ContactForm from "./ContactForm";

const contactDetails = [
  {
    id: 1,
    icon: <FaPhoneAlt />,
    title: "Call Me",
    text: "(+44)7473826533",
    href: "tel:+447473826533",
  },
  {
    id: 2,
    icon: <MdEmail />,
    title: "Email Me",
    text: "olivermshenton@outlook.com",
    href: "mailto:olivermshenton@outlook.com",
  },
  {
    id: 3,
    icon: <FaLocationDot />,
    title: "My Address",
    text: "Sandbach, Cheshire, CW11",
    href: "https://www.google.com/maps/place/Sandbach/",
  },
];

const ContactContainer = () => {
  return (
    <CardContainer>
      {/* Title */}
      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)]">
          Let&apos;s build something <span className="text-blue-500">GREAT</span> together
        </h2>
        <p className="text-sm md:text-md lg:text-lg text-gray-300">
          React • JavaScript & TypeScript • UI/UX
        </p>
      </div>

      {/* Content */}
      <div className="flex max-w-3/4 gap-8 mx-auto justify-between w-full">
        {/* Contact details */}
        <div className="flex-1 text-start">
          {contactDetails.map((detail) => (
            <div key={detail.id} className="flex items-center gap-4 p-4">
              <p className="text-2xl">{detail.icon}</p>
              <div>
                <h3 className="font-bold">{detail.title}</h3>
                <a
                  href={detail.href}
                  className="hover:text-amber-500 transition-colors duration-300">
                  {detail.text}
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Contact form */}
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </CardContainer>
  );
};

export default ContactContainer;
