"use client";
import { techLogos } from "@/data/TechLogoData";
import Image from "next/image";

const Carousel = () => {
  const duplicated = [...techLogos, ...techLogos, ...techLogos];

  return (
    <div className="relative w-full overflow-hidden py-4">
      <div className="flex whitespace-nowrap animate-scroll">
        {duplicated.map((tech, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center min-w-[200px] px-4 opacity-75 hover:opacity-100 transition">
            <Image src={tech.src} alt={tech.name} width={40} height={40} />
            <span className="text-sm mt-2 text-white/80">{tech.name}</span>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute top-0 left-0 h-full w-1 bg-gradient-to-r from-[var(--tertiary-highlight)] to-transparent z-10" />

      <div className="pointer-events-none absolute top-0 right-0 h-full w-1 bg-gradient-to-l from-[var(--tertiary-highlight)] to-transparent z-10" />
    </div>
  );
};

export default Carousel;
