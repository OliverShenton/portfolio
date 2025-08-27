type CardContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const CardContainer = ({ children, className }: CardContainerProps) => {
  return (
    <article
      className={`${className} text-center bg-neutral-900/75 border border-neutral-800 w-full rounded-xl flex flex-col md:flex-row gap-2 md:gap-12 z-10 shadow-sm shadow-black`}>
      {children}
    </article>
  );
};

export default CardContainer;

{
  /* Title */
}
<div className="space-y-4">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--text)]">
    Let&apos;s build something <span className="text-blue-500">GREAT</span> together
  </h2>
  <p className="text-sm md:text-md lg:text-lg text-gray-300">
    React • JavaScript & TypeScript • UI/UX
  </p>
</div>;
