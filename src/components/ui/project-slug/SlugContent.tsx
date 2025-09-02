"use client";

import { ProjectCaseStudy } from "@/schemas/ProjectSchema";
import Image from "next/image";
import {
  SlugCard,
  SlugHr,
  // SlugImageGallery,
  SlugLabel,
  SlugSection,
  SlugTechStack,
} from "./SlugComponents";
import ImageGallery from "./ImageGallery";

const SlugContent = ({
  title,
  cover,
  role,
  repo,
  projectType,
  personalClient,
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
}: ProjectCaseStudy) => {
  // Overview data
  const overviewData = [
    { label: "Title", value: title },
    { label: "Project Type", value: projectType },
    { label: "Personal or Client", value: personalClient },
    { label: "Role", value: role },
    { label: "Year", value: year },
    { label: "Duration", value: duration },
    { label: "Last Updated", value: lastUpdated },
    { label: "Status", value: status },
    { label: "Github", value: repo, link: true },
    { label: "Demo", value: demo, link: true },
  ];

  // Overview data
  const contextData = [
    { label: "Description", value: description },
    { label: "Problem", value: problem },
    { label: "Solution", value: solution },
    {
      label: "Audience",
      value: audience.map((a) => (
        <div key={a} className="flex gap-2">
          <p>👤</p> <p>{a}</p>
        </div>
      )),
    },
  ];

  return (
    <>
      <Image
        src={cover.src}
        alt={cover.alt}
        className="border-2 border-neutral-700 rounded-xl shadow-sm shadow-black/50 z-10"
      />
      <div className="max-w-6xl mx-auto w-full">
        <SlugHr />

        <SlugSection id="slug-overview" title="Overview" grid>
          {overviewData.map((o) => (
            <SlugLabel key={o.label} label={o.label} value={o.value} link={o.link} />
          ))}
        </SlugSection>

        <SlugHr />

        <SlugSection id="slug-context" title="Context" grid>
          {contextData.map((c) => (
            <SlugLabel key={c.label} label={c.label} value={c.value} />
          ))}
        </SlugSection>

        <SlugHr />

        <SlugSection id="slug-scope" title="Scope" className="flex flex-col md:flex-row">
          <SlugCard title="Features" feature={features} />
          <SlugCard title="Pages" feature={pages} />
        </SlugSection>

        <SlugHr />

        <SlugSection id="slug-contribution" title="Tech Stack">
          <SlugTechStack techstack={techstack} />
        </SlugSection>

        <SlugHr />

        <SlugSection id="slug-image-gallery" title="Image Gallery">
          <ImageGallery gallery={gallery} />
        </SlugSection>

        <SlugHr />
      </div>
    </>
  );
};

export default SlugContent;
