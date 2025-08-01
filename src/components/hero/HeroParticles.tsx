"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadFull } from "tsparticles";

const HeroParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  // Reduced motion
  const prefersReducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-mtoion: reduce)").matches,
    []
  );

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      detectRetina: true,

      interactivity: {
        events: {
          onClick: { enable: false },
          onHover: { enable: false },
          resize: {
            enable: true,
          },
        },
      },

      particles: {
        number: {
          value: prefersReducedMotion ? 40 : 80,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: prefersReducedMotion ? 0.05 : 0.1,
          random: true,
          anim: {
            enable: true,
            speed: 0.5,
            opacity_min: 0.05,
            sync: false,
          },
        },
        size: {
          value: prefersReducedMotion ? 1 : { min: 1, max: 3 },
          random: true,
        },
        move: {
          enable: !prefersReducedMotion,
          speed: 0.5,
          direction: MoveDirection.none,
          random: true,
          straight: false,
          outModes: {
            default: OutMode.out,
          },
        },
        links: {
          enable: false,
        },
      },
    }),
    []
  );

  if (init) {
    return (
      <div className="fixed top-0 left-0 w-full h-full z-10">
        <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
      </div>
    );
  }

  return <></>;
};

export default HeroParticles;
