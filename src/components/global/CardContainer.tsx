type CardContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const CardContainer = ({ children, className }: CardContainerProps) => {
  return (
    <article
      className={`${className} text-center bg-[var(--card-background)] border border-neutral-800 w-full p-8 rounded-xl flex flex-col gap-12 z-10`}>
      {children}
    </article>
  );
};

export default CardContainer;
