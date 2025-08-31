type FadesProps = {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
};

const fadeClass = "fixed from-[#0e0e0e] to-transparent z-30";

const Fades = ({ top, bottom, left, right }: FadesProps) => {
  return (
    <>
      {top && <div className={`${fadeClass} top-0 w-full h-10 bg-gradient-to-b`} />}
      {bottom && <div className={`${fadeClass} bottom-0 w-full h-10 bg-gradient-to-t`} />}
      {left && <div className={`${fadeClass} left-0 w-10 h-full bg-gradient-to-r`} />}
      {right && <div className={`${fadeClass} right-0 w-10 h-full bg-gradient-to-l`} />}
    </>
  );
};

export default Fades;
