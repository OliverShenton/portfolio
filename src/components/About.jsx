import SplitScreen from "../components/general/SplitScreen";
import { ABOUT } from "../data/about";
import parse from "html-react-parser";

const divClass =
  "shadow-[0_10px_15px_-3px_rgba(131,131,131,0.1)] p-4 rounded-xl border border-transparent hover:border-blue-500 dark:hover:border-yellow-500 hover:shadow-[0_10px_15px_-3px_rgba(131,131,131,0.3)] hover:-translate-y-1 transition-transform duration-300 ease-in-out";

function AboutSection({ title, text }) {
  return (
    <div className={divClass}>
      <h3 className="mb-2 text-[16px] small:text-[18px] medium:text-[20px] large:text-[22px] xlarge:text-[24px]">
        {title}
      </h3>
      <hr className="mb-4 border-[#333] dark:border-[#eaeaea]" />
      {text.map((item, index) => (
        <p
          key={index}
          className={[
            "text-[12px] small:text-[14px] medium:text-[16px] large:text-[18px] xlarge:text-[20px]",
            index === 0 ? "mb-4" : "",
          ].join(" ")}>
          {parse(item)}
        </p>
      ))}
    </div>
  );
}

export default function About() {
  const [myLifePara, myPassionPara] = ABOUT;

  return (
    <>
      <SplitScreen
        left={<AboutSection {...myLifePara} />}
        right={<AboutSection {...myPassionPara} />}
      />
    </>
  );
}
