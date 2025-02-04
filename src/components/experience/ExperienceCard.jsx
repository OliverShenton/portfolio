import parse from "html-react-parser";

export default function ExperienceCard({ items }) {
  const pClass =
    "text-[12px] small:text-[14px] medium:text-[16px] large:text-[18px] xlarge:text-[20px] text-stone-100";

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => (
        <article
          key={index}
          className="flex flex-col text-left bg-gray-800 border border-gray-700 p-4 rounded-lg shadow-[0_10px_15px_-3px_rgba(131,131,131,0.1)]">
          <div className="flex items-center justify-between mb-2">
            <p className="font-semibold text-orange-500 text-[14px] small:text-[16px] medium:text-[18px] large:text-[20px] xlarge:text-[22px]">
              {item.title}
            </p>
            <p className={`text-right ${pClass}`}>{item.date}</p>
          </div>
          <p className={pClass}> {item.location}</p>
          <hr className="my-4 border-gray-500 rounded-md" />
          <ul className="list-disc px-6">
            {item.details.map((det, detIndex) => (
              <li key={detIndex} className={`${pClass}`}>
                {parse(det)}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
