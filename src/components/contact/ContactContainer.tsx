import { FaPhoneAlt } from "react-icons/fa";
import CardContainer from "../global/CardContainer";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import ContactForm from "./ContactForm";

// const contactDetails = [
//   {
//     id: 1,
//     icon: <FaPhoneAlt />,
//     title: "Call Me",
//     text: "(+44)7473826533",
//     href: "tel:+447473826533",
//   },
//   {
//     id: 2,
//     icon: <MdEmail />,
//     title: "Email Me",
//     text: "olivermshenton@outlook.com",
//     href: "mailto:olivermshenton@outlook.com",
//   },
//   {
//     id: 3,
//     icon: <FaLocationDot />,
//     title: "My Address",
//     text: "Sandbach, Cheshire, CW11",
//     href: "https://www.google.com/maps/place/Sandbach/",
//   },
// ];

const ContactContainer = () => {
  return (
    <CardContainer className="gap-30 p-12">
      {/* Left side */}
      <div className="flex-1 w-full">
        {/* Title */}

        <h2 className="text-5xl mb-4 font-semibold text-left">Get In Touch.</h2>
        <p className="text-4xl text-left">
          Let&apos;s build something <span className="text-blue-500">great</span> together.
        </p>
      </div>

      {/* Right side */}
      <div className="flex-1 w-full">
        <ContactForm />
      </div>
    </CardContainer>
    //
  );
};

export default ContactContainer;
