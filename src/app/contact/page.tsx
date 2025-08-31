import ContactCard from "@/components/ui/contact/ContactCard";
import Hr from "@/components/ui/global/Hr";
import SectionContainer from "@/components/ui/global/SectionContainer";
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
      <div
        id="contact-page-background"
        className="absolute inset-0 bg-cover bg-center z-0 h-full"
      />

      <Hr />

      {/* Content */}
      <ContactCard />
    </SectionContainer>
  );
};

export default ContactPage;
