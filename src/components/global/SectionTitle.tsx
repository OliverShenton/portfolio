type SectionTitleProps = {
  title: string;
};

const SectionTitle = ({ title }: SectionTitleProps) => {
  return <h2 className={`text-3xl font-bold justify-start w-full`}>{title}</h2>;
};

export default SectionTitle;
