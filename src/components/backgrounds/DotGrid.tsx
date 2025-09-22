const DotGrid = () => {
  return (
    <div className="absolute inset-0 flex">
      <div className="hidden md:flex flex-1" />
      <div
        className="flex-1"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
        aria-hidden="true"
      />
    </div>
  );
};

export default DotGrid;
