import { motion } from "motion/react";
import { childVariants, parentVariants } from "./StaggeredLoad";

const StaggerContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div variants={parentVariants}>
      <motion.div variants={childVariants}>{children}</motion.div>
    </motion.div>
  );
};

export default StaggerContainer;
