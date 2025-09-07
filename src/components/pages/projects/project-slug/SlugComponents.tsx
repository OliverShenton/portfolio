import Image, { StaticImageData } from "next/image";

// Base classes
const titleClass = "text-[var(--secondary-text)] text-[15px]";
const textClass = "text-[var(--text)] text-[17px]";

// Section component
export const SlugSection = ({
  id,
  title,
  children,
  className,
  grid,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  grid?: boolean;
}) => {
  return (
    <section aria-labelledby={id} className="relative grid gap-8 py-12 max-w-5xl mx-auto">
      <h2 id={id} className="text-xl lg:text-2xl font-bold tracking-tight">
        {title}
      </h2>
      <div
        id="slug-content-grid"
        className={`${
          grid ? "grid" : ""
        } grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full ${className}`}>
        {children}
      </div>
    </section>
  );
};

// Label component
export const SlugLabel = ({
  label,
  value,
  link,
}: {
  label: string;
  value: React.ReactNode;
  link?: boolean;
}) => {
  return (
    <>
      <div className={titleClass}>{label}:</div>
      <div className={textClass}>
        {link ? (
          <a
            href={value as string}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-600 transition">
            {value}
          </a>
        ) : (
          value
        )}
      </div>
    </>
  );
};

// hr component
export const SlugHr = () => {
  return <hr className="w-full text-neutral-700 rounded-full" />;
};

// Image gallery component
type ImageItem = { src: StaticImageData | string; alt: string };

type SlugImageGalleryProps = {
  gallery?: ImageItem[];
};

export const SlugImageGallery = ({ gallery = [] }: SlugImageGalleryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {gallery.map((g: ImageItem, idx: number) => (
        <div
          key={idx}
          className="relative hover:scale-105 transition-transform duration-300 cursor-pointer">
          <Image src={g.src} alt={g.alt} className="mb-2 rounded-xl border-neutral-800" />
          <p className="absolute bottom-4 left-2 px-2 py-1 border border-neutral-800 bg-black/75 rounded-full text-sm text-[var(--secondary-text)] ">
            {g.alt}
          </p>
        </div>
      ))}
    </div>
  );
};

// Card component
type FeatureItem = { feature: string; done: boolean };

type SlugCardProps = {
  title: string;
  feature?: FeatureItem[];
};

export const SlugCard = ({ title, feature = [] }: SlugCardProps) => {
  return (
    <div className="border border-neutral-700 rounded-xl flex flex-col p-4 gap-4 flex-1">
      <p className={titleClass}>{title}</p>
      {feature.map((f: FeatureItem, idx: number) => (
        <article key={idx} className="flex gap-2 text-sm items-center self-start">
          <p>{f.done ? "✅" : "🔜"}</p>
          <p>{f.feature}</p>
        </article>
      ))}
    </div>
  );
};

// Tech stack
export const SlugTechStack = ({ techstack }: { techstack: string[] }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {techstack.map((t, idx) => (
        <p key={idx} className={`border border-neutral-700 p-4 text-sm`}>
          {t}
        </p>
      ))}
    </div>
  );
};
