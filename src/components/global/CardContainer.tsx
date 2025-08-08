type CardContainerProps = {
  children: React.ReactNode;
};

const CardContainer = ({ children }: CardContainerProps) => {
  return <article>{children}</article>;
};

export default CardContainer;
