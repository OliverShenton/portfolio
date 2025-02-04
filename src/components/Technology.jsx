import { TECHSTACK } from "../data/technologies";

const CATEGORY_COLORS = {
  frontend: {
    border: "border-blue-500",
    gradient: "from-blue-400 via-gray-700 to-gray-800",
  },
  backend: {
    border: "border-green-500",
    gradient: "from-green-400 via-gray-700 to-gray-800",
  },
  testing: {
    border: "border-red-500",
    gradient: "from-red-400 via-gray-700 to-gray-800",
  },
  tools: {
    border: "border-purple-500",
    gradient: "from-purple-400 via-gray-700 to-gray-800",
  },
};

function getCategoryStyles(type) {
  return (
    CATEGORY_COLORS[type] || {
      border: "border-gray-700",
      gradient: "from-gray-700 to-gray-800",
    }
  );
}

function TechnologyCard({ name, image, border }) {
  return (
    <li
      className={`flex flex-col items-center justify-center bg-gradient-to-b from-stone-700 to-stone-800 ${border} border p-4 w-16 h-16 medium:w-32 medium:h-40 rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.5)] hover:scale-105 hover:-translate-y-1 transition-transform`}
      aria-label={`Technology: ${name}`}>
      <img
        src={image}
        alt={name}
        className="object-contain medium:h-12 large:h-16 medium:mb-4 large:mb-8"
      />
      <p className="medium:text-base font-medium text-[#E5E5E5] hidden medium:flex">{name}</p>
    </li>
  );
}

function TechnologyCategory({ type, techArray }) {
  const { gradient, border } = getCategoryStyles(type);

  return (
    <div className="mb-4">
      <div
        className={`text-center text-[14px] small:text-[16px] medium:text-[18px] large:text-[20px] xlarge:text-[22px] font-bold text-gray-100 py-1 medium:py-3 medium:px-6 rounded-lg bg-gradient-to-r ${gradient} shadow-lg mb-4`}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </div>

      {/* Technology Cards */}
      <ul className="flex gap-4 items-center justify-center flex-wrap text-[10px] small:text-[12px] medium:text-[14px] large:text-[16px] xlarge:text-[18px]">
        {techArray.map((item) => (
          <TechnologyCard key={item.name} name={item.name} image={item.image} border={border} />
        ))}
      </ul>
    </div>
  );
}

export default function Technology() {
  return (
    <div className="text-white">
      {Object.entries(TECHSTACK).map(([type, techArray]) => (
        <TechnologyCategory key={type} type={type} techArray={techArray} />
      ))}
    </div>
  );
}
