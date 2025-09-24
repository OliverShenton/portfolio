const RadialGradient = () => {
  return (
    <div
      className="absolute inset-0 pointer-events-none h-full"
      style={{
        backgroundImage:
          "radial-gradient(300px 300px at 50% 50%, rgba(59,130,246,.12), transparent 60%), " +
          "radial-gradient(900px 600px at 20% -10%, rgba(14,165,233,.1), transparent 60%), " +
          "radial-gradient(900px 600px at 120% 110%, rgba(99,102,241,.1), transparent 60%)",
        backgroundBlendMode: "screen, normal, screen",
      }}
    />
  );
};

export default RadialGradient;
