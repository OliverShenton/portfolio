import Button from "../general/Button";

export default function ProjectCard({
  image = "",
  header = "",
  description = "",
  link = "",
  index = 0,
}) {
  const cardClass = "w-64 bg-stone-100 text-[#333] rounded-xl shadow-xl border-2 flex flex-col";
  const mobileClass = `${cardClass} medium:hidden`;
  const desktopClass = `${cardClass} hidden medium:flex medium:hover:scale-105 transition-transform duration-300 hover:shadow-2xl`;

  function CardContent({ showButton = false }) {
    return (
      <>
        <img src={image} alt={header} className="rounded-t-xl" />
        <div className="p-4 flex flex-col flex-grow">
          <h4 className="mb-2">{header}</h4>
          <p className="flex-grow">{description}</p>
          {showButton && (
            <div className="text-center mt-4">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <Button text="View Project" variant="primary" />
              </a>
            </div>
          )}
        </div>
      </>
    );
  }

  return (
    <>
      {index < 3 && (
        <article className={mobileClass}>
          <CardContent showButton />
        </article>
      )}

      <article className={desktopClass}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <CardContent />
        </a>
      </article>
    </>
  );
}
