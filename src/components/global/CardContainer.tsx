type CardContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const CardContainer = ({ children, className }: CardContainerProps) => {
  return <article className={`${className} bg-[var(--card-background)]`}>{children}</article>;
};

export default CardContainer;
