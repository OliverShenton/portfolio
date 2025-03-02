// import { ReactNode } from "react";

// interface IconSetProps {
//   icons: ReactNode[];
//   className?: string;
// }

// export default function IconSet({ icons, className }: IconSetProps) {
//   return (
//     <div className="flex gap-8">
//       {icons.map((icon, index) => (
//         <span
//           key={index}
//           className={`p-2 shadow-indigo-500 shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] text-[1rem] sm:text-[1.2rem] md:text-[1.4rem] lg:text-[1.8rem] xl:text-[2rem] ${className}`}>
//           {icon}
//         </span>
//       ))}
//     </div>
//   );
// }

import { ReactNode } from "react";

interface IconSetProps {
  icons: { icon: ReactNode; link?: string }[];
  centered?: boolean;
  rounded?: boolean;
  classname?: string;
}

const iconClass = "p-2 shadow-indigo-500 shadow-[0_0_10px_1px_rgba(0,0,0,0.1)]";

export default function IconSet({ icons, centered, rounded, classname }: IconSetProps) {
  return (
    <div className={`flex gap-8 ${centered ? "justify-center" : ""}`}>
      {icons.map(({ icon, link }, index) =>
        link ? (
          <a
            key={index}
            href={link}
            target="_blank"
            className={`${iconClass} ${rounded ? "rounded-[50%]" : "rounded-xl"} ${classname}`}>
            {icon}
          </a>
        ) : (
          <span
            key={index}
            className={`${iconClass} ${rounded ? "rounded-[50%]" : "rounded-xl"} ${classname}`}>
            {icon}
          </span>
        )
      )}
    </div>
  );
}
