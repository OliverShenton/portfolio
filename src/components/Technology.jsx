import { TECHSTACK } from "../data/technologies";

export default function Technology() {
  return (
    <div className="text-white py-10">
      {Object.entries(TECHSTACK).map(([type, techArray], index) => (
        <div key={index} className="mb-4 ">
          <ul className="flex gap-4 items-center justify-center flex-wrap">
            {techArray.map((item, techIndex) => (
              <li
                key={techIndex}
                className="flex flex-col items-center justify-center bg-gray-800 border border-gray-700 p-4 w-16 h-16 medium:w-32 medium:h-40 rounded-lg shadow-lg hover:scale-105 transition-transform">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-contain h-12 sm:h-16 medium:mb-4"
                />
                <p className="medium:text-base font-medium text-gray-300 hidden medium:flex">
                  {item.name}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
