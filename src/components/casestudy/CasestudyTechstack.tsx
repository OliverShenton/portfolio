const CasestudyTechstack = ({ techstack }: { techstack: string[] }) => {
  return (
    <>
      <div className="flex gap-8 flex-wrap">
        {techstack.map((t) => (
          <p
            key={t}
            className="bg-[#171717] border border-[#404040] hover:border-[var(--card-border-hover)] px-4 py-3 rounded-xl z-10 text-sm">
            {t}
          </p>
        ))}
      </div>
    </>
  );
};

export default CasestudyTechstack;
