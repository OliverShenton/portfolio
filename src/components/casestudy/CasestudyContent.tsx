import { ProjectCasestudy } from "@/schema/ProjectSchema";
import Image from "next/image";
import CasestudySection from "./CasestudySection";
import CasestudyLabel from "./CasestudyLabel";
import CustomHr from "../global/CustomHr";

const CasestudyContent = ({
  title,
  cover,
  role,
  repo,
  projectType,
  client,
  year,
  lastUpdated,
  duration,
  status,
  demo,
  description,
  audience,
  features,
  pages,
  techstack,
  gallery,
  updateHistory,
}: ProjectCasestudy) => {
  const overviewData = [
    { label: "Title", value: title },
    { label: "Project Type", value: projectType },
    { label: "Client", value: client },
    { label: "Role", value: role },
    { label: "Year", value: year },
    { label: "Duration", value: duration },
    { label: "Last Updated", value: lastUpdated },
    { label: "Status", value: status },
    { label: "Github", value: repo, link: false },
    { label: "Demo", value: demo, link: false },
  ];

  return (
    <>
      <Image src={cover.src} alt={title} className="rounded-xl" />
      <CustomHr opaque />
      <CasestudySection title="Overview" grid>
        {overviewData.map((o) => (
          <CasestudyLabel key={o.label} label={o.label} value={o.value} link={o.link} />
        ))}
      </CasestudySection>
      <CustomHr opaque />
    </>
  );
};

export default CasestudyContent;
