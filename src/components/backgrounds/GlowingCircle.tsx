import { motion, useReducedMotion } from "motion/react";
import Orb from "./Orb";
import { HerofadeUpAnimationOpaque } from "../animations/Animations";

const GlowingCircle = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-500 to-blue-500 blur-3xl overflow-hidden"
        initial="initial"
        animate="animate"
        transition={HerofadeUpAnimationOpaque.transition}
        variants={HerofadeUpAnimationOpaque}
      />
      <motion.div
        className="absolute px-4 md:px-6 py-24 xl:py-32 w-full h-full z-10 overflow-hidden"
        initial="initial"
        animate="animate"
        transition={HerofadeUpAnimationOpaque.transition}
        variants={HerofadeUpAnimationOpaque}>
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

export default GlowingCircle;
