import { RouterButton } from "../ui/global/Button";
import Hr from "../ui/global/Hr";
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

      <div
        className="
          relative overflow-hidden rounded-xl w-full
          bg-[var(--card-background)] border border-neutral-800
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
        <div className="relative z-10 text-center space-y-8 md:space-y-12 w-3/4 md:w-2/3 mx-auto">
          <h2 id="contact-heading" className="font-bold text-2xl md:text-3xl lg:text-4xl">
            Let&apos;s Create Something <span className="text-indigo-500">Amazing</span> Together.
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-[var(--secondary-text)]">
            React • JavaScript & TypeScript • UI/UX
          </p>
          <Hr />
          <RouterButton href="/contact" variant="primary-button">
            Contact Me
          </RouterButton>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Contact;
