// import { TECH } from "../../data/tech";

// export default function TechCards() {
//   return (
//     <>
//       {TECH.map((type, typeIndex) => (
//         <div key={typeIndex} className="flex flex-wrap justify-center gap-4 mb-4">
//           {type.tech.map((item, index) => (
//             <article
//               key={index}
//               className="flex flex-col items-center justify-center border border-gray-600 rounded-2xl p-2 bg-gray-900
//             w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 lg:w-28 lg:h-32 xl:w-32 xl:h-36">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
//               />
//               <h2 className="text-xs sm:text-sm md:text-base text-center mt-2">{item.name}</h2>
//             </article>
//           ))}
//         </div>
//       ))}
//     </>
//   );
// }

// import { TECH } from "../../data/tech";

// export default function TechCards() {
//   return (
//     <>
//       {TECH.map((type, typeIndex) => (
//         <div key={typeIndex} className="flex flex-wrap justify-center gap-4 mb-4">
//           {type.tech.map((item, index) => (
//             <article
//               key={index}
//               className="flex flex-col items-center justify-center border border-gray-600 rounded-2xl p-2 bg-gray-900
//             w-16 h-20 sm:w-20 sm:h-24 md:w-24 md:h-28 lg:w-28 lg:h-32 xl:w-32 xl:h-36">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
//               />
//               <h2 className="text-xs sm:text-sm md:text-base text-center mt-2">{item.name}</h2>
//             </article>
//           ))}
//         </div>
//       ))}
//     </>
//   );
// }

// import { TECHSTACK } from "../../data/tech";

// const titleCardBackground = [
//   "bg-gradient-to-b from-[#ff6a00] to-[#ff3c00]",
//   "bg-gradient-to-b from-[#9b00e8] to-[#6e00ff]",
//   "bg-gradient-to-b from-[#ffc107] to-[#ff9800]",
//   "bg-gradient-to-b from-[#00c853] to-[#00e676]",
// ];

// export default function TechStackShowcase() {
//   return (
//     <div className="grid grid-col-1 sm:grid-cols-2 gap-6">
//       {TECHSTACK.map((type, typeIndex) => (
//         <div key={typeIndex} className="grid grid-cols-3 gap-6 p-4">
//           {type.tech.map((item, index) => (
//             <article
//               key={index}
//               className={`border border-gray-600 bg-gray-900 flex items-center flex-col gap-4 p-4
//               rounded-md w-32 h-32 ${index === 0 ? `${titleCardBackground[typeIndex]}` : ""}`}>
//               {typeof item.image === "string" ? (
//                 <img src={item.image} alt={item.name} className="object-contain lg:w- 16 lg:h-16" />
//               ) : (
//                 <item.image className="object-contain lg:w-20 lg:h-20" />
//               )}
//               <h3>{item.name}</h3>
//             </article>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }

import { TECHSTACK } from "../../data/tech";

const titleCardBackground = [
  "bg-gradient-to-b from-[#ff6a00] to-[#ff3c00]",
  "bg-gradient-to-b from-[#9b00e8] to-[#6e00ff]",
  "bg-gradient-to-b from-[#ffc107] to-[#ff9800]",
  "bg-gradient-to-b from-[#00c853] to-[#00e676]",
];

export default function TechStackShowcase() {
  return (
    <div className="flex flex-col gap-8">
      {TECHSTACK.map((type, typeIndex) => (
        <div key={typeIndex} className="flex items-center justify-center gap-8 flex-wrap">
          {type.tech.map((item, index) => (
            <article
              key={index}
              className={`border border-gray-600 bg-gray-900 flex flex-col items-center justify-between gap-4 p-4
              rounded-md w-32 h-32 ${index === 0 ? `${titleCardBackground[typeIndex]}` : ""}`}>
              {/* Uniform Image Container */}
              <div className="flex items-center justify-center w-16 h-16">
                {typeof item.image === "string" ? (
                  <img src={item.image} alt={item.name} className="object-contain w-full h-full" />
                ) : (
                  <item.image className="object-contain w-full h-full" />
                )}
              </div>

              {/* Uniform Name Container */}
              <h3 className="text-center text-sm leading-tight w-full truncate">{item.name}</h3>
            </article>
          ))}
        </div>
      ))}
    </div>
  );
}
