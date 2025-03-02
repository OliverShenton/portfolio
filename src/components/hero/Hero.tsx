// import React, { useMemo } from "react";
// import IconSet from "./IconSet";
// import TrueFocus from "./TrueFocus";
// import FadeIn from "../global/FadeIn";

// import { IoMdPerson } from "react-icons/io";
// import { FaCode } from "react-icons/fa6";
// import { BiSolidContact } from "react-icons/bi";
// import Section from "../global/Section";

// const Hero: React.FC = () => {
//   const ICONS = useMemo(
//     () => [{ icon: <IoMdPerson /> }, { icon: <FaCode /> }, { icon: <BiSolidContact /> }],
//     []
//   );

//   return (
//     <Section background="bg-gradient-to-b from-[#1a1a2e] to-[#000000]" fullScreen={true}>
//       <>
//         <FadeIn delay={0.5} duration={3}>
//           <TrueFocus
//             sentence="Personal Portfolio"
//             manualMode={false}
//             blurAmount={5}
//             borderColor="indigo"
//             animationDuration={1.25}
//             pauseBetweenAnimations={1.5}
//           />
//         </FadeIn>
//       </>
//     </Section>
//   );
// };

//   <div className="min-h-dvh bg-gradient-to-b from-[#1a1a2e] to-[#000000] relative">
//     <div className="absolute inset-0 noise-overlay pointer-events-none" />
//     <div className="relative flex flex-col items-center justify-center min-h-screen">
//       <FadeIn duration={0.8}>
//         <IconSet icons={ICONS} className="mb-8 rounded-[50%]" />
//       </FadeIn>
//       <FadeIn delay={0.3} duration={1}>
//         <TrueFocus
//           sentence="Personal Portfolio"
//           manualMode={false}
//           blurAmount={5}
//           borderColor="indigo"
//           animationDuration={1.25}
//           pauseBetweenAnimations={1.5}
//         />
//       </FadeIn>
//     </div>
//   </div>
// );
// };

// export default Hero;

import IconSet from "../global/IconSet";
import Section from "../global/Section";
import { IoMdPerson } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { BiSolidContact } from "react-icons/bi";

const ICONS = [{ icon: <IoMdPerson /> }, { icon: <FaCode /> }, { icon: <BiSolidContact /> }];

export default function Hero() {
  return (
    <Section sectionCentered fullScreenOnly centeredText>
      <div className="flex flex-col gap-6 cursor-default">
        <IconSet icons={ICONS} centered rounded classname="text-2xl" />
        <h1 className="tracking-widest font-playfair font-black text-5xl break-normal">
          O l i v e r &nbsp; S h e n t o n
        </h1>
        <div className="text-2xl">
          <span>Personal</span>
          <span className="mx-2">●</span>
          <span>Portfolio</span>
        </div>
      </div>
    </Section>
  );
}
