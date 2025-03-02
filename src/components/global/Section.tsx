// import { ReactNode } from "react";
// import FadeIn from "./FadeIn";

// interface SectionProps {
//   background: string;
//   title: string;
//   children: ReactNode;
// }

// export default function Section({ background, title, children }: SectionProps) {
//   return (
//     <section className={`${background} flex flex-col min-h-dvh py-12 md:py-16 lg:py-20 px-4`}>
//       <div className="text-center max-w-6xl mx-auto">
//         <FadeIn duration={0.8}>
//           <h2 className="relative uppercase mb-8 md:mb-12 lg:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 font-bold text-[clamp(1.5rem,4vw,2rem)]">
//             {title}
//           </h2>
//         </FadeIn>
//         <FadeIn delay={0.3}>
//           <div className="relative">{children}</div>
//         </FadeIn>
//       </div>
//     </section>
//   );
// }

// import { ReactNode } from "react";
// import FadeIn from "./FadeIn";

// interface SectionProps {
//   background: string;
//   title?: string;
//   children: ReactNode;
//   fullScreen?: boolean;
// }

// export default function Section({ background, title, children, fullScreen }: SectionProps) {
//   return (
//     <section
//       className={`${background} relative flex flex-col ${
//         fullScreen ? "h-dvh" : "min-h-screen"
//       } py-12 md:py-16 lg:py-20 px-4`}>
//       <div className="relative max-w-6xl mx-auto w-full h-full">
//         <div className="relative w-full h-full">
//           {title && (
//             <FadeIn duration={0.8}>
//               <h2 className="absolute top-0 left-1/2 -translate-x-1/2 uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 font-bold text-[clamp(1.5rem,4vw,2rem)]">
//                 {title}
//               </h2>
//             </FadeIn>
//           )}
//           <FadeIn delay={0.3} duration={1.0}>
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
//               {children}
//             </div>
//           </FadeIn>
//         </div>
//       </div>
//     </section>
//   );
// }

import { ReactNode } from "react";

interface SectionProps {
  sectionCentered?: boolean;
  backgroundFlip?: boolean;
  fullScreenOnly?: boolean;
  centeredText?: boolean;
  className?: string;
  children: ReactNode;
}

export default function Section({
  sectionCentered,
  backgroundFlip,
  fullScreenOnly,
  centeredText,
  className,
  children,
}: SectionProps) {
  return (
    <>
      <div className="noise-overlay" />
      <div
        className={`flex px-4 ${sectionCentered ? "items-center justify-center" : " py-8"} ${
          backgroundFlip
            ? "bg-gradient-to-b from-[#000000] to-[#1a1a2e]"
            : "bg-gradient-to-b from-[#1a1a2e] to-[#000000]"
        } ${fullScreenOnly ? "min-h-dvh md:h-dvh" : "min-h-dvh"} ${
          centeredText ? "text-center" : ""
        } ${className}`}>
        <div className="max-w-6xl mx-auto w-full">{children}</div>
      </div>
    </>
  );
}
