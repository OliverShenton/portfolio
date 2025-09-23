import { UpdateItem } from "@/schema/ProjectSchema";

const CasestudyUpdateHistory = ({ date, description }: UpdateItem) => {
  return (
    <>
      <div className="text-[var(--secondary-text)] text-[15px]">{date}</div>
      <div className="text-[var(--text)] text-[17px]">{description}</div>
    </>
  );
};

export default CasestudyUpdateHistory;
