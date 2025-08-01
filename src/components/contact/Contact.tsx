// import { MdEmail } from "react-icons/md";
import Section from "../global/Section";
// import { FaPhone } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";
import SectionTitle from "../global/SectionTitle";

// const ContactDetails = [
//   { id: 1, label: "olivermshenton@outlook.com", icon: <MdEmail />, href: "" },
//   { id: 2, label: "(+44)7473826533", icon: <FaPhone />, href: "" },
//   { id: 3, label: "Sandbach, Cheshire, CW11", icon: <FaLocationDot />, href: "" },
// ];

const Contact = () => {
  return (
    <Section id="contact">
      <SectionTitle title="Get In Touch" subtitle="Let's build something great together." />
      {/* <ContactForm /> */}
      {/* <div className="flex flex-col gap-20">
        <ContactForm />
        <SectionTitle title="Or contact me at:" /> */}
      {/* </div> */}
      {/* <div className="flex items-center justify-between w-full">
        <div className="flex-1 w-full text-start space-y-6">
          <div className="flex flex-col">Lets Get In Touch!</div>
          <p></p>
          <div className="flex flex-col space-y-8">
            {ContactDetails.map((detail) => (
              <a
                key={detail.id}
                href={detail.href}
                className="flex items-center gap-4 hover:underline underline-offset-4 hover:text-amber-500">
                <span className="text-2xl">{detail.icon}</span>
                <span>{detail.label}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="flex-1 items-end justify-end space-y-6"></div>
      </div> */}
    </Section>
  );
};

export default Contact;
