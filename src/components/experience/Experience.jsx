import ExperienceCard from "./ExperienceCard";
import { EXPERIENCE, EDUCATION } from "../../data/experience";
import SplitScreen from "../general/SplitScreen";

export default function Experience() {
  return (
    <div className="text-center large:mb-16">
      <SplitScreen
        left={<ExperienceCard items={EXPERIENCE} />}
        right={<ExperienceCard items={EDUCATION} />}
      />
    </div>
  );
}
