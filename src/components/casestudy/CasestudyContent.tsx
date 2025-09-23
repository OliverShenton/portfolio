import { ProjectCasestudy } from "@/schema/ProjectSchema";
import Image from "next/image";
import CasestudySection from "./CasestudySection";
import CasestudyLabel from "./CasestudyLabel";
import CustomHr from "../global/CustomHr";
import CasestudyList from "./CasestudyList";
import CasestudyTechstack from "./CasestudyTechstack";
import CasestudyLinks from "./CasestudyLinks";
import CasestudyImageGallery from "./CasestudyImageGallery";
import CasestudyUpdateHistory from "./CasestudyUpdateHistory";

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
  problem,
  solution,
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
  ];

  const overviewLinksData = [
    { label: "Github", value: repo },
    { label: "Demo", value: demo },
  ];

  const contextData = [
    { label: "Description", value: description },
    { label: "Problem", value: problem },
    { label: "Solution", value: solution },
    {
      label: "Audience",
      value: audience.map((a) => (
        <div key={a}>
          <span className="text-sm">👤</span> <span>{a}</span>
        </div>
      )),
    },
  ];

  const scopeData = [
    { label: "Features", value: features },
    { label: "Pages", value: pages },
  ];

  return (
    <>
      <Image src={cover.src} alt={title} className="rounded-xl max-w-6xl" />
      <CustomHr opaque />
      <CasestudySection title="Overview" grid>
        {overviewData.map((o) => (
          <CasestudyLabel key={o.label} label={o.label} value={o.value} />
        ))}
        {overviewLinksData.map((o) => (
          <CasestudyLinks key={o.label} label={o.label} link={o.value} />
        ))}
      </CasestudySection>
      <CustomHr opaque />
      <CasestudySection title="Context" grid>
        {contextData.map((c) => (
          <CasestudyLabel key={c.label} label={c.label} value={c.value} />
        ))}
      </CasestudySection>
      <CustomHr opaque />
      <CasestudySection title="Scope" grid>
        {scopeData.map((s) => (
          <CasestudyList key={s.label} label={s.label} feature={s.value} />
        ))}
      </CasestudySection>
      <CustomHr opaque />
      <CasestudySection title="Techstack">
        <CasestudyTechstack techstack={techstack} />
      </CasestudySection>
      <CustomHr opaque />
      <CasestudySection title="Image Gallery">
        <CasestudyImageGallery gallery={gallery} />
      </CasestudySection>
      <CustomHr opaque />
      <CasestudySection title="Update History" grid>
        {updateHistory.map((u, idx) => (
          <CasestudyUpdateHistory key={idx} date={u.date} description={u.description} />
        ))}
      </CasestudySection>
    </>
  );
};

export default CasestudyContent;
