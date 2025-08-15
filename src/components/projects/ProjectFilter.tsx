// type ProjectFilterProps = {
//   onChange?: (e: any) => void;
//   activeFilter: any;
// };

// const filterData = ["All", "Designed", "Developed"];

// const ProjectFilter = ({ onChange, activeFilter }: ProjectFilterProps) => {
//   return (
//     <div className="flex flex-wrap items-center z-10">
//       {filterData.map((filter) => (
//         <button
//           key={filter}
//           onClick={() => onChange?.(filter)}
//           className={`px-12 py-6 border border-neutral-800 cursor-pointer hover:brightness-500 ${
//             activeFilter ? "bg-black/50" : "bg-transparent"
//           }`}>
//           {filter}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default ProjectFilter;
