interface Props {
  title: string;
  children: React.ReactNode;
  grid?: boolean;
}

const CasestudySection = ({ title, children, grid }: Props) => {
  return (
    <section aria-labelledby={title} className="relative grid gap-8 py-12 max-w-5xl mx-auto w-full">
      <h2 className="text-xl lg:text-2xl font-bold">{title}</h2>
      <div
        id="slug-content-grid"
        className={`${grid ? "grid" : ""} grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full`}>
        {children}
      </div>
    </section>
  );
};

export default CasestudySection;
