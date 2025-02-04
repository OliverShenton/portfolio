import BlurText from "../animations/BlurText";

export default function HeroText({
  text = "",
  textSizeSmall = "",
  textSizeLarge = "",
  direction = "bottom",
}) {
  return (
    <>
      <div>
        <h2
          className={`flex justify-center medium:hidden mb-2 ${textSizeSmall} opacity-0 animate-fadeInUp`}
          style={{ animationDelay: "500ms" }}>
          {text}
        </h2>
      </div>
      <h2 className={`hidden medium:flex justify-center mb-6 ${textSizeLarge}`}>
        <BlurText text={text} delay={75} animateBy="letter" direction={direction} />
      </h2>
    </>
  );
}
