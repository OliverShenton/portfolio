import React from "react";

type ShinyTextProps = {
  text: string;
  textColor: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
};

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  textColor,
  disabled = false,
  speed = 5,
  className = "",
}) => {
  const animationDuration = `${speed}s`;

  return (
    <div className={`relative block ${className}`}>
      {/* Gradient Text Layer */}
      <span className={`text-transparent bg-clip-text ${textColor}`}>{text}</span>

      {/* Shine Overlay */}
      {!disabled && (
        <span
          className="absolute inset-0 text-transparent bg-clip-text animate-shine pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 60%)",
            backgroundSize: "200% 100%",
            animationDuration: animationDuration,
          }}>
          {text}
        </span>
      )}
    </div>
  );
};

export default ShinyText;
