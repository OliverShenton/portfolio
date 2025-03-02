// import { PROJECTS } from "../../data/projects";

// export default function ProjectsCards() {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 group">
//       {PROJECTS.map((item, index) => (
//         <article
//           key={index}
//           className="relative w-full h-48 sm:h-56 md:h-60 lg:h-72 xl:h-80 overflow-hidden rounded-lg shadow-lg hover:cursor-pointer
//                    transition-all duration-500 group-hover:opacity-50 group-hover:backdrop-blur-lg
//                    hover:!opacity-100 hover:!backdrop-blur-none hover:scale-105">
//           <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-500 opacity-0 group-hover:opacity-100 hover:opacity-0" />
//           <img
//             src={item.image}
//             alt={item.title}
//             className="w-full h-full object-cover transition-transform duration-500"
//           />
//           <h3 className="absolute bottom-2 left-2 bg-black/60 text-white text-xs sm:text-sm md:text-lg font-semibold px-3 py-1 rounded-md transition-transform duration-500">
//             {item.title}
//           </h3>
//         </article>
//       ))}
//     </div>
//   );
// }

import { PROJECTS } from "../../data/projects";

export default function ProjectShowcase() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 group">
      {PROJECTS.map((item, index) => (
        <article
          key={index}
          className="relative cursor-pointer overflow-hidden rounded-lg transition-all duration-500 group-hover:opacity-50 hover:!opacity-100 hover:scale-105">
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg transition-all duration-500 opacity-0 group-hover:opacity-100 hover:opacity-0" />
          <div className="relative w-full h-64 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
          <h3 className="absolute bottom-2 left-2 text-white bg-black/60 px-3 py-1 rounded-md ">
            {item.title}
          </h3>
        </article>
      ))}
    </div>
  );
}
