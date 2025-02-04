import Button from "../general/Button";
import Quote from "../general/Quote";
import { IoMdDownload } from "react-icons/io";
import HeroText from "./HeroText";
import CV from "../../assets/oliver-shenton.pdf";

export default function Hero() {
  const textColor = "text-[#333] dark:text-[#eaeaea]";
  const animationDelay = window.innerWidth >= 768 ? "2800ms" : "1500ms";

  return (
    <div id="hero" className="min-h-screen">
      <div className="absolute top-0 left-0 w-full h-full bg-[#eaeaea]/60 dark:bg-black/80 backdrop-blur-[8px]" />
      <div
        className={`absolute w-5/6 medium:w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 ${textColor}`}>
        <HeroText
          text="Hi, I'm Oliver Shenton"
          textSizeSmall="text-2xl small:text-3xl"
          textSizeLarge="text-4xl large:text-5xl xlarge:text-7xl"
          direction="top"
        />
        <HeroText
          text="Web Developer"
          textSizeSmall="text-xl small:text-2xl"
          textSizeLarge="text-3xl large:text-4xl xlarge:text-6xl"
        />
        <div className="opacity-0 animate-fadeInUp" style={{ animationDelay }}>
          <div>
            <Quote
              text={"Excellence is not a skill. It is an attitude."}
              author={"Ralph Marston"}
            />
          </div>
          <div className="flex items-center flex-col medium:flex-row justify-center gap-12 text-[#eaeaea] mt-6">
            <Button
              text={
                <a href={CV} target="_blank" className="flex items-center gap-2 justify-center">
                  <IoMdDownload />
                  {"Download CV"}
                </a>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
