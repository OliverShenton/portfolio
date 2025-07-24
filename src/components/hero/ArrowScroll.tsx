import { motion } from "motion/react";
import { useEffect, useState } from "react";

const ArrowScroll = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true);
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(() => {
      if (!hasScrolled) {
        setShowArrow(true);
      }
    }, 10000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [hasScrolled]);

  return (
    <motion.div
      className="absolute bottom-12 left-1/2 -translate-x-1/2 text-3xl text-gray-400 animate-bounce"
      initial={{ opacity: 0 }}
      animate={showArrow ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}>
      ↓
    </motion.div>
  );
};

export default ArrowScroll;
