import { motion, useReducedMotion } from "motion/react";
import Orb from "./Orb";

const Background = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <motion.div
        className="absolute px-4 md:px-6 py-24 xl:py-32 w-full h-full z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <Orb
          hoverIntensity={1}
          rotateOnHover={prefersReducedMotion ? false : true}
          hue={0}
          forceHoverState={false}
        />
      </motion.div>
      <div className="absolute flex w-full h-full z-0">
        <div className="flex-1" />
        <div id="dot-grid-pattern" className="flex-1" />
      </div>
    </>
  );
};

export default Background;
