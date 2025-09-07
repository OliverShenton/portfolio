import Modal from "@/components/ui/global/Modal";
import { AnimatePresence, motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type ImageItem = { src: StaticImageData | string; alt: string };

type ImageGalleryProps = {
  gallery?: ImageItem[];
};

const ImageGallery = ({ gallery = [] }: ImageGalleryProps) => {
  const [selected, setSelected] = useState<ImageItem | null>(null);

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

      <AnimatePresence initial={false}>
        {selected && (
          <Modal onClose={() => setSelected(null)} labelledBy="modal-title">
            <motion.div>
              <h2 id="modal-title">{selected.alt}</h2>
              <Image
                src={selected.src}
                alt={selected.alt}
                className="max-w-7xl mx-auto rounded-xl"
                priority
                layout="responsive"
              />
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default ImageGallery;
