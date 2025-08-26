import Image, { StaticImageData } from "next/image";

export const SlugSection = ({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <section aria-labelledby={id} className="grid gap-8 leading-relaxed py-12 max-w-5xl mx-auto">
      <h2 id={id} className="text-xl lg:text-2xl font-bold tracking-tight">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-8">{children}</div>
    </section>
  );
};

export const SlugLabel = ({ label, value }: { label: string; value: string }) => {
  return (
    <>
      <p className="text-gray-400">{label}</p>
      <p>{value}</p>
    </>
  );
};

export const SlugHr = () => {
  return <hr className="w-full text-neutral-700 rounded-full" />;
};

type ImageItem = { src: StaticImageData | string; alt?: string };

type SlugImageGalleryProps = {
  gallery?: ImageItem[];
};

export const SlugImageGallery = ({ gallery }: SlugImageGalleryProps) => {
  return (
    <div className="grid grid-cols-3 gap-8 w-full">
      {(gallery ?? []).map((g: ImageItem, idx: number) => (
        <Image key={typeof g.src === "string" ? g.src : idx} src={g.src} alt={g.alt ?? ""} />
      ))}
    </div>
  );
};
