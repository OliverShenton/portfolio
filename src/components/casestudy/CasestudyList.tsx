type FeatureItem = { feature: string; completed: boolean };

interface CasestudyListProps {
  label: string;
  feature: FeatureItem[];
}

const CasestudyList = ({ label, feature }: CasestudyListProps) => {
  return (
    <>
      <div className="text-[var(--secondary-text)] text-[15px]">{label}:</div>
      <ul className="text-[var(--text)] text-[17px]">
        {feature.map((f) => (
          <li key={f.feature}>
            <span className="text-sm">{f.completed ? "🟢" : "🔜"}</span> <span>{f.feature}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CasestudyList;
