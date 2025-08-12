import { RouterButton } from "../global/Button";
import Hr from "../global/Hr";
import SectionContainer from "../global/SectionContainer";

const ContactSection = () => {
  return (
    <SectionContainer id="contact" ariaLabelledBy="contact-heading">
      <div
        className="
          relative overflow-hidden rounded-xl w-full
          bg-neutral-900 border border-neutral-800
          px-4 md:px-6 py-10 md:py-14 lg:py-20 xl:py-24
          [--mx:50%] [--my:50%]
        "
        style={{
          backgroundImage: `
            radial-gradient(300px 300px at var(--mx) var(--my), rgba(59,130,246,0.12), transparent 60%),
            radial-gradient(900px 600px at 20% -10%, rgba(14,165,233,0.10), transparent 60%),
            radial-gradient(900px 600px at 120% 110%, rgba(99,102,241,0.10), transparent 60%)
          `,
          backgroundBlendMode: "screen, normal, normal",
        }}>
        {/* Background */}
        <div id="hero-background" className="absolute inset-0 bg-cover bg-center opacity-25 z-0" />
        <div className="relative z-10 text-center space-y-8 w-3/4 md:w-2/3 mx-auto">
          <h2 id="contact-heading" className="font-bold text-2xl md:text-3xl lg:text-4xl">
            Let&apos;s Create Something Amazing Together.
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl"> React • JavaScript & TypeScript • UI/UX</p>
          <Hr />
          <RouterButton href="/contact" variant="primary-button">
            Contact Me
          </RouterButton>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
