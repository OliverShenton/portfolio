import Image, { StaticImageData } from "next/image";

type MinimalProjectCardProps = {
  title: string;
  image: StaticImageData;
};

const MinimalProjectCard = ({ title, image }: MinimalProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <img
        src={image.src}
        alt={title}
        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Centered button */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="cursor-pointer px-5 py-2 bg-gradient-to-r from-[var(--highlight)] to-[var(--secondary-highlight)] text-[var(--background)] hover:bg-gradient-to-br rounded-lg shadow-md">
          View Project
        </button>
      </div>
    </div>
  );
};

export default MinimalProjectCard;
