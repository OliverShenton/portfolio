import SectionContainer from "@/components/global/SectionContainer";
import ContactCard from "@/components/contact/ContactCard";
import { Metadata } from "next";
import ContactFormContainer from "@/components/contact/ContactFormContainer";

export const metadata: Metadata = {
  title: "Get In Touch | Oliver Shenton",
  description:
    "Contact Oli for web development projects, questions, or collaborations. Send a message easily via the built-in contact form.",
};

const ContactPage = () => {
  return (
    <SectionContainer id="contact-page">
      {/* Background */}
      <div
        id="contact-page-background"
        className="absolute inset-0 bg-cover bg-center z-0 h-full"
      />

      {/* Content */}
      <ContactFormContainer />
    </SectionContainer>
  );
};

export default ContactPage;
