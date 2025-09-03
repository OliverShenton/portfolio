"use client";

import { FaLink } from "react-icons/fa";
import { RouterButton } from "../global/Button";

const arrowStyle =
  "inline-block opacity-0 w-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:ml-2";

const MoreButton = () => {
  return (
    <RouterButton href="/projects" variant="secondary-button" className="group">
      <span>More Projects</span>
      <span className={arrowStyle}>
        <FaLink />
      </span>
    </RouterButton>
  );
};

export default MoreButton;
