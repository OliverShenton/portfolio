import ContactContainer from "@/components/contact/ContactContainer";
import Hr from "@/components/global/Hr";
import SectionContainer from "@/components/global/SectionContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oliver Shenton | Get In Touch",
  description:
    "Contact Oli for web development projects, questions, or collaborations. Send a message easily via the built-in contact form.",
};

const ContactPage = () => {
  return (
    <SectionContainer id="contact-page">
      {/* Background */}
      <div id="projects-background" className="absolute inset-0 bg-cover bg-center z-0 h-full" />

      <Hr />

      {/* Content */}
      <ContactContainer />
    </SectionContainer>
  );
};

export default ContactPage;
