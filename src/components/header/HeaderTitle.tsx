"use client";

import { motion } from "motion/react";
import Link from "next/link";

const HeaderTitle = () => {
  return (
    <motion.div whileHover={{ color: "#f59e0b" }} transition={{ duration: 0.1, delay: 0 }}>
      <Link href="/" title="Home">
        <h1 id="header-title" className="text-xl md:text-2xl uppercase font-bold px-4 py-4 md:px-6">
          Oliver Shenton
        </h1>
      </Link>
    </motion.div>
  );
};

export default HeaderTitle;
