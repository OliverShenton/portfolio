import SectionContainer from "../global/SectionContainer";
import SectionTitle from "../global/SectionTitle";
import ContactCard from "../contact/ContactCard";

const ContactSection = () => {
  return (
    <SectionContainer id="contact-section">
      <SectionTitle
        title="Get In Touch"
        subtitle="Open for collaborations and opportunities"
        color="emerald"
      />
      <ContactCard />
    </SectionContainer>
  );
};

export default ContactSection;
