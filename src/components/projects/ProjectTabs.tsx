// import { useState } from "react";
// import { motion } from "framer-motion";

// interface ProjectTabsProps {
//   projects: React.ReactNode;
//   techStack: React.ReactNode;
// }

// export default function ProjectTabs({ projects, techStack }: ProjectTabsProps) {
//   const [selectedTab, setSelectedTab] = useState<"projects" | "tech-stack">("projects");

//   return (
//     <div>
//       <div className="flex items-center relative mb-12">
//         <button
//           className={`flex-1 py-8 border border-[#a78bfa] relative ${
//             selectedTab === "projects"
//               ? "bg-[#a78bfa]/30 cursor-default"
//               : "bg-transparent cursor-pointer"
//           }`}
//           onClick={() => setSelectedTab("projects")}>
//           Projects
//         </button>
//         <button
//           className={`flex-1 py-8 border border-[#a78bfa] relative ${
//             selectedTab === "tech-stack"
//               ? "bg-[#a78bfa]/30 cursor-default"
//               : "bg-transparent cursor-pointer"
//           }`}
//           onClick={() => setSelectedTab("tech-stack")}>
//           Tech Stack
//         </button>
//         <motion.div
//           layoutId="underline"
//           className="absolute top-0 bottom-0 bg-[#a78bfa]/30"
//           animate={{
//             left: selectedTab === "projects" ? "0%" : "50%",
//             width: "50%",
//           }}
//           transition={{ type: "spring", stiffness: 300, damping: 30 }}
//         />
//       </div>

//       <div>
//         {selectedTab === "projects" && (
//           <motion.div
//             key="projects"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.3 }}>
//             {projects}
//           </motion.div>
//         )}
//         {selectedTab === "tech-stack" && (
//           <motion.div
//             key="tech-stack"
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.3 }}>
//             {techStack}
//           </motion.div>
//         )}
//       </div>
//     </div>
//   );
// }

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";

interface ProjectsTabsProps {
  projects: ReactNode;
  techstack: ReactNode;
}

export default function ProjectsTabs({ projects, techstack }: ProjectsTabsProps) {
  const [selectedTab, setSelectedTab] = useState("projects");

  return (
    <>
      <div className="relative flex items-center justify-center border border-gray-500 mb-8">
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-full bg-[#a78bfa]/30"
          initial={{ x: "0%" }}
          animate={{ x: selectedTab === "projects" ? "0%" : "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <button
          className="relative flex-1 p-6 text-center cursor-pointer"
          onClick={() => setSelectedTab("projects")}>
          Projects
        </button>
        <button
          className="relative flex-1 p-6 text-center cursor-pointer"
          onClick={() => setSelectedTab("techstack")}>
          Tech Stack
        </button>
      </div>
      <div className="px-4">
        {selectedTab === "projects" && <div>{projects}</div>}
        {selectedTab === "techstack" && <div>{techstack}</div>}
      </div>
    </>
  );
}
