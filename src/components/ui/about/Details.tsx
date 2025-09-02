import CardContainer from "../layouts/CardContainer";

import Img1 from "../../../../public/images/developer/image-1.png";
import Image from "next/image";
import { LinkButton } from "../global/Button";
import { Personality, Values } from "@/data/AboutMeData";

const cardStyle =
  "bg-transparent p-8 flex flex-col hover:shadow-rose-500 duraation-100 transition-shadow";
const titleStyle = " text-lg underline underline-offset-4";
const textStyle = "text-[15px] text-[var(--secondary-text)]";

const Details = () => {
  return (
    <div className="flex flex-col w-full gap-8">
      <div className="flex flex-col md:flex-row gap-8">
        <CardContainer className={`${cardStyle} flex-2`}>
          <></>
        </CardContainer>
        <CardContainer className={`${cardStyle} flex-1 gap-4 items-center`}>
          {/* <Image
            src={Img1}
            alt="Oliver Shenton"
            className="rounded-full border border-white/50 p-2 w-50 h-50"
          /> */}
          <LinkButton href="">View my CV</LinkButton>
        </CardContainer>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <CardContainer className={`${cardStyle} flex-1`}>
          {" "}
          {Values.map((v) => (
            <div key={v.title}>
              <span className={titleStyle}>{v.title}</span>
              <span className={textStyle}> - {v.text}</span>
            </div>
          ))}
        </CardContainer>
        <CardContainer className={`${cardStyle} flex-1`}>
          {Personality.map((v) => (
            <div key={v.title}>
              <span className={titleStyle}>{v.title}</span>
              <span className={textStyle}> - {v.text}</span>
            </div>
          ))}
        </CardContainer>
      </div>
    </div>
    // <div className="flex flex-col md:flex-row gap-4 w-full">
    //   <div className="flex flex-1 gap-8">
    //     <CardContainer className={`${cardStyle} flex-2`}>
    //       <p className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-red-500 to-rose-500 hover:bg-gradient-to-b transition-all duration-300">
    //         Hello
    //       </p>
    //       <p className="text-3xl">My name is Oliver</p>
    //       <p className="text-xl">I am a frontend developer</p>
    //       <div className="flex-1"></div>
    //       <LinkButton
    //         href="https://github.com/OliverShenton/cv/blob/main/Oliver%20Shenton.pdf"
    //         target="_blank"
    //         variant="primary-button">
    //         View my CV
    //       </LinkButton>
    //     </CardContainer>
    //     <CardContainer className={cardStyle}>
    // {Values.map((v) => (
    //   <div key={v.title}>
    //     <span className={titleStyle}>{v.title}</span>
    //     <span className={textStyle}> - {v.text}</span>
    //   </div>
    // ))}
    //     </CardContainer>
    //     <CardContainer className={cardStyle}>
    // {Personality.map((v) => (
    //   <div key={v.title}>
    //     <span className={titleStyle}>{v.title}</span>
    //     <span className={textStyle}> - {v.text}</span>
    //   </div>
    // ))}
    //     </CardContainer>
    //   </div>
    // </div>
  );
};

export default Details;

{
  /* <article className={`hover:shadow-pink-500/30 flex-2 space-y-4 ${cardClass}`}>
  <p className="text-3xl">📖</p>
  <h3 className={titleClass}>My Story</h3>
  <p className="text-[var(--secondary-text)] leading-loose text-xl">{Story}</p>
</article>;
<article className={`hover:shadow-blue-500/30 flex-1 space-y-4 ${cardClass}`}>
  <p className="text-3xl">⚡</p>
  <h3 className={titleClass}>My Values</h3>
  <ul className="text-[var(--secondary-text)] leading-relaxed space-y-2">
    {Values.map((v) => (
      <li key={v.title}>
        <span className="font-bold text-base">{v.title}</span>
        <span className="text-[15px]"> - {v.text}</span>
      </li>
    ))}
  </ul>
</article>;
<article className={`hover:shadow-amber-500/30 flex-1 space-y-4 ${cardClass}`}>
  <p className="text-3xl">🎨</p>
  <h3 className={titleClass}>My Personality</h3>
  <ul className="text-[var(--secondary-text)] leading-relaxed space-y-2">
    {Personality.map((p) => (
      <li key={p.title}>
        <span className="font-bold text-base">{p.title}</span>
        <span className="text-[15px]"> - {p.text}</span>
      </li>
    ))}
  </ul>
</article>; */
}
