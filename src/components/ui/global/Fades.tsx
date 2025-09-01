type FadesProps = {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
};

const fadeClass = "fixed from-[var(--background)] to-transparent z-30";

const Fades = ({ top, bottom, left, right }: FadesProps) => {
  return (
    <>
      {top && (
        <div className={`${fadeClass} top-0 w-full h-10 sm:h-15 md:h-20 bg-gradient-to-b z-20`} />
      )}
      {bottom && (
        <div
          className={`${fadeClass} bottom-0 w-full h-10 sm:h-15 md:h-20 bg-gradient-to-t z-20`}
        />
      )}
      {left && <div className={`${fadeClass} left-0 w-10 h-full bg-gradient-to-r z-20`} />}
      {right && <div className={`${fadeClass} right-0 w-10 h-full bg-gradient-to-l z-20`} />}
    </>
  );
};

export default Fades;
