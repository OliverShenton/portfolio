"use client";

import { motion, AnimatePresence } from "framer-motion";
import ShinyText from "../global/ShinyText";
import { slideVariants } from "../global/Animations";

type HeroSlideData = {
  mainText: string;
  subText: string;
  textColor: string;
  direction: "next" | "prev";
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
        className="w-full font-bold leading-[1]">
        <div className="text-start text-[7.5rem] sm:text-[10rem] md:text-[12rem] lg:text-[13rem] xl:text-[15rem] -indent-[1rem]">
          <ShinyText text={mainText} textColor={textColor} speed={12} />
        </div>
        <div className="text-end text-outline text-transparent sm:text-[7.5rem] md:text-[9.5rem] lg:text-[10.5rem] xl:text-[12.5rem]">
          <h1>{subText}</h1>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HeroSlides;
