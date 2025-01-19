export default function Card({ items }) {
  const pClass = "text-sm text-gray-400";

  return (
    <div className="flex flex-col gap-4">
      {items.map((item, index) => (
        <article
          key={index}
          className="flex flex-col text-left bg-gray-800 border border-gray-700 p-4 rounded-lg">
          <p className="font-semibold">{item.title}</p>
          <p className={pClass}>{item.date}</p>
          <p className={pClass}> {item.location}</p>
          <hr className="my-4 border-gray-500 rounded-md" />
          <ul className="list-disc px-6">
            {item.details.map((det, detIndex) => (
              <li key={detIndex} className="text-sm medium:text-base">
                {det}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
