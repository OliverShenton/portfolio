import { LinkButton } from "@/components/ui/global/Button";
import CardContainer from "@/components/ui/layouts/CardContainer";
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
  );
};

export default Details;
