type CardContainerProps = {
  children: React.ReactNode;
  className: string;
};

const CardContainer = ({ children, className }: CardContainerProps) => {
  return <article className={`${className} bg-[#171b23]`}>{children}</article>;
};

export default CardContainer;
