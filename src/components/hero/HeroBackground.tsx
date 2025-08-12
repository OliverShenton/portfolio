import DarkVeil from "../animated-backgrounds/DarkVeil";
import ParticleBackground from "../animated-backgrounds/ParticleBackground";

const HeroBackground = () => {
  return (
    <div className="absolute h-full w-full">
      <div style={{ width: "100%", height: "100%", position: "absolute", opacity: 0.5, zIndex: 0 }}>
        <DarkVeil speed={1.5} />
      </div>
      <div style={{ width: "100%", height: "100%", position: "absolute", opacity: 1, zIndex: 0 }}>
        <ParticleBackground
          particleColors={["#4b5563", "#4b5563"]}
          particleCount={200}
          particleSpread={10}
          speed={0.05}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
          sizeRandomness={0}
        />
      </div>
    </div>
  );
};

export default HeroBackground;
