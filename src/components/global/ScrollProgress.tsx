import { ReactNode, useEffect, useState } from "react";

interface ScrollProgressProps {
  children: ReactNode;
}

export default function ScrollProgress({ children }: ScrollProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 360;
      setProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  const strokeDashOffset = circumference - (progress / 360) * circumference;

  // Function to calculate line endpoints based on angle
  const getLineCoordinates = (angle: number) => {
    const radians = (angle - 90) * (Math.PI / 180);
    const x = 60 + radius * Math.cos(radians);
    const y = 60 + radius * Math.sin(radians);
    return { x, y };
  };

  // Line positions at 0°, 120°, 240°
  const lines = [0, 120, 240].map((angle) => {
    const { x, y } = getLineCoordinates(angle);
    return <line key={angle} x1="60" y1="60" x2={x} y2={y} stroke="black" strokeWidth="2" />;
  });

  return (
    <div className="relative flex items-center justify-center">
      {/* The Scroll Progress Circle */}
      <svg width="120" height="120" viewBox="0 0 120 120">
        {/* Background Circle */}
        <circle cx="60" cy="60" r={radius} stroke="lightgray" strokeWidth="10" fill="none" />

        {/* Scroll Progress Indicator */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="red"
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashOffset}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
        />

        {/* Section Dividers */}
        {lines}
      </svg>

      {/* Centered Child (Hamburger) */}
      <div className="absolute object-fill">{children}</div>
    </div>
  );
}
