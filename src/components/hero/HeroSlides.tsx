"use client";

import { motion, AnimatePresence } from "framer-motion";
import ShinyText from "../global/ShinyText";
import { slideVariants } from "../global/Animations";

type HeroSlideData = {
  mainText: string;
  subText: string;
  textColor: string;
  direction?: "next" | "prev";
};

const HeroSlides = ({ mainText, subText, textColor, direction }: HeroSlideData) => {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={mainText + subText}
        custom={direction}
        variants={slideVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative w-full font-bold leading-[1]">
        <div className="text-center text-[12.5rem] -indent-[1rem] mb-4">
          <ShinyText className="shiny-text" text={mainText} textColor={textColor} speed={12} />
        </div>
        <div className="text-center text-outline text-transparent text-7xl">
          <h1 className="tiny-text">{subText}</h1>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HeroSlides;
