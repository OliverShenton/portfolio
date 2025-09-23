const fadeStyle = "fixed from-[var(--background)] to-transparent z-30 pointer-events-none";

const ScreenBorderFades = () => {
  return (
    <>
      <div className={`${fadeStyle} top-0 w-full h-10 sm:h-15 md:h-20 bg-gradient-to-b z-20`} />
      <div className={`${fadeStyle} bottom-0 w-full h-10 sm:h-15 md:h-20 bg-gradient-to-t z-20`} />
    </>
  );
};

export default ScreenBorderFades;
