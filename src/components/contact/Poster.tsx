"use client";

import { RouterButton } from "../global/Button";
import CardBase from "../global/CardContainer";
import Hr from "../global/CustomHr";
import { FaLongArrowAltRight } from "react-icons/fa";

const arrowStyle =
  "inline-block opacity-0 w-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:ml-2";

const Poster = () => {
  return (
    <CardBase
      id="contact-poster"
      animated
      className="relative overflow-hidden rounded-xl w-full
        bg-[var(--card-background)] border border-neutral-800
        px-4 md:px-6 py-10 md:py-14 lg:py-20 xl:py-24">
      <div className="relative text-center space-y-8 md:space-y-12 w-3/4 md:w-2/3 mx-auto">
        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          Let&apos;s Create Something <span className="text-indigo-500">Amazing</span> Together.
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-[var(--secondary-text)]">
          React • JavaScript &amp; TypeScript • UI/UX
        </p>
        <Hr opaque />
        <RouterButton href="/contact" variant="primary-button" className="group ">
          <span>Contact Me</span>
          <span className={arrowStyle}>
            <FaLongArrowAltRight />
          </span>
        </RouterButton>
      </div>
    </CardBase>
  );
};

export default Poster;
