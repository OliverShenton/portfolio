import Image, { StaticImageData } from "next/image";

// Base classes
const titleClass = "text-gray-400 text-[15px]";
const textClass = "text-gray-100 text-[17px]";

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
    <section
      aria-labelledby={id}
      className="relative grid gap-8 leading-relaxed py-12 max-w-5xl mx-auto">
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
            className="text-blue-500 underline hover:text-blue-700 transition">
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
type ImageItem = { src: StaticImageData | string; alt?: string };

type SlugImageGalleryProps = {
  gallery?: ImageItem[];
};

export const SlugImageGallery = ({ gallery = [] }: SlugImageGalleryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {gallery.map((g: ImageItem, idx: number) => (
        <Image key={idx} src={g.src} alt={g.alt ?? ""} />
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
    <div className="border border-neutral-700 rounded-xl p-4 grid gap-4 flex-1">
      <p className={titleClass}>{title}</p>
      {feature.map((f: FeatureItem, idx: number) => (
        <article key={idx} className="flex gap-2 text-sm">
          <p>{f.done ? "✅" : "⚪"}</p>
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
