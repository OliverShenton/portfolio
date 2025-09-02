import Poster from "../ui/contact/Poster";
import SectionTitle from "../ui/global/SectionTitle";
import SectionContainer from "../ui/layouts/SectionContainer";

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
