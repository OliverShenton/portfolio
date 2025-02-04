import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import useFadeInAnimation from "../animations/FadeInAnimation";

export default function Section({
  id = "",
  title = "Default Title",
  subTitle = "Defa",
  bgColor = "bg-[#eaeaea]",
  darkBgColor = "dark:bg-[#1c1c1c]",
  hrVisible = "flex",
  children,
}) {
  const { controls, sectionRef } = useFadeInAnimation();

  const textColor = "text-[#333] dark:text-[#eaeaea]";
  const borderColor = "border-[#1c1c1c] dark:border-[#eaeaea]";
  const containerStyles = "max-w-6xl mx-auto px-8 py-8 medium:py-20 large:pt-20 large:pb-32";

  return (
    <section
      ref={sectionRef}
      className={`w-full scroll-mt-[72px] ${textColor} ${bgColor} ${darkBgColor}`}
      id={id}>
      <div className={containerStyles}>
        <motion.h2
          initial="hidden"
          animate={controls}
          variants={useFadeInAnimation.variants}
          className={`border-2 medium:border-0 ${borderColor} text-center uppercase font-bold font-plafair text-xl small:text-2xl medium:text-3xl large:text-4xl xlarge:text-5xl mb-4 medium:mb-8 p-2 medium:p-0`}>
          {title}
        </motion.h2>
        <motion.hr
          initial="hidden"
          animate={controls}
          variants={useFadeInAnimation.variants}
          className={`hidden medium:block mb-8 large:mb-12 ${borderColor} ${hrVisible}`}
        />
        <motion.h3
          initial="hidden"
          animate={controls}
          variants={useFadeInAnimation.variants}
          className="text-center small:text-lg medium:text-2xl large:text-3xl text-neutral-800 dark:text-neutral-200 mb-4 medium:mb-8 large:mb-12">
          {subTitle}
        </motion.h3>
        <motion.div initial="hidden" animate={controls} variants={useFadeInAnimation.variants}>
          {children}
        </motion.div>
      </div>
    </section>
  );
}
