import { Personality, Story, Values } from "@/data/AboutMeData";

const cardClass =
  "bg-[var(--card-background)] p-8 rounded-xl border-neutral-900 border shadow-sm shadow-black/50 hover:shadow-lg transition-all duration-200";
const titleClass = "font-bold text-2xl";

const Details = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Part 1 */}
      <article className={`hover:shadow-pink-500/30 flex-2 space-y-4 ${cardClass}`}>
        <p className="text-3xl">📖</p>
        <h3 className={titleClass}>My Story</h3>
        <p className="text-[var(--secondary-text)] leading-loose text-xl">{Story}</p>
      </article>
      {/* Part 2 */}
      <article className={`hover:shadow-blue-500/30 flex-1 space-y-4 ${cardClass}`}>
        <p className="text-3xl">⚡</p>
        <h3 className={titleClass}>My Values</h3>
        <ul className="text-[var(--secondary-text)] leading-relaxed space-y-2">
          {Values.map((v) => (
            <li key={v.title}>
              <span className="font-bold text-base">{v.title}</span>
              <span className="text-[15px]"> - {v.text}</span>
            </li>
          ))}
        </ul>
      </article>
      {/* Part 3 */}
      <article className={`hover:shadow-amber-500/30 flex-1 space-y-4 ${cardClass}`}>
        <p className="text-3xl">🎨</p>
        <h3 className={titleClass}>My Personality</h3>
        <ul className="text-[var(--secondary-text)] leading-relaxed space-y-2">
          {Personality.map((p) => (
            <li key={p.title}>
              <span className="font-bold text-base">{p.title}</span>
              <span className="text-[15px]"> - {p.text}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
};

export default Details;
