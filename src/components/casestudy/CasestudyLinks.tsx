import { LinkItem } from "@/schema/ProjectSchema";

const CasestudyLinks = ({ label, link }: { label: string; link: LinkItem }) => {
  return (
    <>
      <div className="text-[var(--secondary-text)] text-[15px]">{label}:</div>
      <div className="text-[var(--text)] text-[17px]">
        {link.available ? (
          <a
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-600 transition cursor-pointer">
            {link.link}
          </a>
        ) : (
          <p>{link.link}</p>
        )}
      </div>
    </>
  );
};

export default CasestudyLinks;
