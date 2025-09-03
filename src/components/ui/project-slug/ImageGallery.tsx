import { AnimatePresence } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

type ImageItem = { src: StaticImageData | string; alt: string };

type ImageGalleryProps = {
  gallery?: ImageItem[];
};

const ImageGallery = ({ gallery = [] }: ImageGalleryProps) => {
  const [selected, setSelected] = useState<ImageItem | null>(null);

  // Lock scroll when image is expanded
  useEffect(() => {
    if (selected) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [selected]);

  // Escape key closes the expanded image
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelected(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {gallery.map((g) => (
          <div
            key={g.alt}
            onClick={() => setSelected(g)}
            className="relative cursor-pointer rounded-xl overflow-hidden border border-[var(--border-color)] hover:border-[var(--border-color-hover)] hover:scale-102 transition-all duration-150">
            <Image src={g.src} alt={g.alt} />
            <p className="absolute bottom-4 left-4 px-3 py-1 rounded-full border border-[var(--border-color)] bg-[var(--card-background)] text-sm">
              {g.alt}
            </p>
          </div>
        ))}
      </div>

      {selected && (
        <AnimatePresence>
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <div className="relative max-w-7xl w-full px-4">
              <Image
                src={selected.src}
                alt={selected.alt}
                className="rounded-xl"
                layout="responsive"
                width={1000}
                height={600}
              />
            </div>
            <div
              className="absolute top-4 right-4 border border-[var(--border-color-hover)] hover:brightness-150 p-4 rounded-xl cursor-pointer"
              aria-label="Close button"
              onClick={() => setSelected(null)}>
              ✕
            </div>
          </div>
        </AnimatePresence>
      )}
    </>
  );
};

export default ImageGallery;
