const Background = () => {
  return (
    <div className="absolute inset-0 flex flex-col md:flex-row w-full h-full">
      <div className="flex-1 bg-[var(--background)]" />
      <div className="flex-1 bg-[var(--secondary-background)]" />
    </div>
  );
};

export default Background;
