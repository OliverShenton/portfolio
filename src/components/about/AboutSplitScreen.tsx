const AboutSplitScreen = ({ left, right }: { left: React.ReactNode; right: React.ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      <div className="flex-1  p-4">{left}</div>
      <div className="flex-1  p-4">{right}</div>
    </div>
  );
};

export default AboutSplitScreen;
