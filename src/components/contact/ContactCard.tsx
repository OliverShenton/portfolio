import { FaLongArrowAltRight } from "react-icons/fa";
import { RouterButton } from "../global/Button";
import CardContainer from "../global/CardContainer";
import CustomHr from "../global/CustomHr";
import RadialGradient from "../backgrounds/RadialGradient";

const arrowStyle =
  "inline-block opacity-0 w-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:px-4";

const ContactCard = () => {
  return (
    <CardContainer width className="flex flex-col px-4 md:px-6 py-10 md:py-14 lg:py-20 xl:py-24">
      <RadialGradient />
      <div className="relative text-center space-y-6 md:space-y-12 mx-auto">
        <h3 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          Let&apos;s Create Something <span className="text-indigo-500 uppercase">Amazing </span>
          Together
        </h3>
        <p className="text-sm md:text-base lg:text-lg text-[var(--secondary-text)]">
          React & Next.js • JavaScript &amp; TypeScript • UI/UX
        </p>
        <CustomHr opaque />
        <RouterButton
          href="/contact"
          title="Contact"
          variant="primary"
          className="group min-w-3/4 w-fit mx-auto">
          <span>Contact Me</span>
          <span className={arrowStyle}>
            <FaLongArrowAltRight />
          </span>
        </RouterButton>
      </div>
    </CardContainer>
  );
};

export default ContactCard;
