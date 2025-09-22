interface Props {
  label: string;
  value: React.ReactNode;
  link?: boolean;
}

const CasestudyLabel = ({ label, value, link }: Props) => {
  return (
    <>
      <div className="text-[var(--secondary-text)] text-[15px]">{label}:</div>
      <div className="text-[var(--text)] text-[17px]">
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

export default CasestudyLabel;
