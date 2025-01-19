import SplitScreen from "./SplitScreen";
import { ABOUT } from "../data/about";
import image from "../assets/about-moon-and-stars.jpg";
import Quote from "./Quote";

export default function About() {
  const paraCSSClass = "text-sm medium:text-lg";

  const [introPara, mainPara] = ABOUT;

  return (
    <div>
      <div className="mb-8 large:mb-12 text-center">
        <p className={paraCSSClass}>{introPara.para}</p>
      </div>

      <SplitScreen
        left={
          <div className="mb-4 large:mb-0 flex justify-center">
            <img
              src={image}
              alt="A contemplative man gazing at the moon"
              className="border-2 rounded-[15%] max-w-full h-auto w-1/2 large:w-full"
            />
          </div>
        }
        right={
          <div className="text-center large:text-left">
            <Quote
              text="Shoot for the moon. Even if you miss, you'll land among the stars."
              author="Norman Vincent Peale"
              mb={"mb-8"}
            />
            <p className={paraCSSClass}>{mainPara.para}</p>
          </div>
        }
      />
    </div>
  );
}
