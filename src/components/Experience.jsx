import Card from "./Card";
import { EDUCATION, EXPERIENCE } from "../data/experience";
import Quote from "./Quote";
import SplitScreen from "./SplitScreen";

export default function Experience() {
  return (
    <div>
      <div className="text-center large:mb-16">
        <Quote
          text={"Experience is not what happens to you; it's what you do with what happens to you."}
          author={"Aldous Huxley"}
          mb="mb-8 medium:mb-16"
        />
        <SplitScreen left={<Card items={EXPERIENCE} />} right={<Card items={EDUCATION} />} />
      </div>
    </div>
  );
}
