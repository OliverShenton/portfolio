import LightRays from "@/components/animated-backgrounds/LightRays";
import ParticleBackground from "@/components/animated-backgrounds/ParticleBackground";
import SectionContainer from "@/components/global/SectionContainer";

const ContactPage = () => {
  return (
    <SectionContainer id="contact-page" relative>
      {/* Backgrounds */}
      <ParticleBackground zIndex="z-10" />
      <div style={{ width: "100%", height: "100%", position: "absolute" }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#00bfff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <div className="min-h-screen" />
    </SectionContainer>
  );
};

export default ContactPage;
