import Poster from "../ui/contact/Poster";
import SectionContainer from "../ui/global/SectionContainer";
import SectionTitle from "../ui/global/SectionTitle";

const Contact = () => {
  return (
    <SectionContainer id="contact" ariaLabelledBy="contact-heading">
      {/* Title */}
      <SectionTitle
        title="Get In Touch"
        subtitle="Open for collaborations and opportunities"
        marker="emerald"
      />

      {/* Poster */}
      <Poster />
    </SectionContainer>
  );
};

export default Contact;
