import { ProjectCaseStudy } from "@/schemas/ProjectSchema";
import Image from "next/image";
import { SlugHr, SlugImageGallery, SlugLabel, SlugSection } from "./SlugComponents";

const SlugContent = ({
  title,
  cover,
  projectType,
  role,
  duration,
  status,
  year,
  description,
  purpose,
  problem,
  audience,
  gallery,
}: ProjectCaseStudy) => {
  // Overview data
  const overviewData = [
    { label: "Title", value: title },
    { label: "Project Type", value: projectType },
    { label: "Role", value: role },
    { label: "Duration", value: duration },
    { label: "Status", value: status },
    { label: "Year", value: year },
  ];

  // Overview data
  const contextData = [
    { label: "Description", value: description },
    { label: "Purpose", value: purpose },
    { label: "Problem", value: problem },
    { label: "Audience", value: audience },
  ];

  return (
    <>
      <Image
        src={cover.src}
        alt={cover.alt}
        className="border-2 border-neutral-700 rounded-xl shadow-sm shadow-black/50"
      />
      <div className="max-w-6xl mx-auto w-full">
        <SlugHr />
        <SlugSection id="slug-overview" title="Overview">
          {overviewData.map((o) => (
            <>
              <p className="text-gray-400">{o.label}:</p>
              <p className="text-lg">{o.value}</p>
            </>
          ))}
        </SlugSection>

        <SlugHr />
        <SlugSection id="slug-context" title="Context">
          {contextData.map((c) => (
            <>
              <p className="text-gray-400">{c.label}:</p>
              <p className="text-lg">{c.value}</p>
            </>
          ))}
        </SlugSection>

        <SlugHr />
        <SlugSection id="slug-scope" title="Scope">
          <></>
        </SlugSection>

        <SlugHr />
        <SlugSection id="slug-contribution" title="Contribution">
          <></>
        </SlugSection>

        <SlugHr />
        <SlugSection id="slug-impact" title="Impact">
          <></>
        </SlugSection>

        <SlugHr />
        <SlugSection id="slug-gallery" title="Gallery">
          <SlugImageGallery gallery={gallery} />
        </SlugSection>

        <SlugHr />
        <SlugSection id="slug-challenges-learnings" title="Challenges & Learnings">
          <></>
        </SlugSection>

        <SlugHr />
        <SlugSection id="slug-future-work" title="Future Work">
          <></>
        </SlugSection>

        <SlugHr />
        <SlugSection id="slug-links" title="Links">
          <></>
        </SlugSection>
        <SlugHr />
      </div>
    </>
  );
};

export default SlugContent;

// import Image, { StaticImageData } from "next/image";
// import { SlugHr, SlugImageGallery, SlugSection } from "./SlugComponents";
// import { LinkButton } from "../global/Button";

// type SlugContentProps = {
//   title: string;
//   websiteType: string;
//   role: string;
//   repo: string;
//   demo: string;
//   progress: string;
//   description: string;
//   purpose: string;
//   problem: string;
//   features: string[];
//   pages: string[];
//   techstack: string[];
//   gallery: StaticImageData[];
// };

// const SlugContent = ({
//   title,
//   websiteType,
//   role,
//   repo,
//   demo,
//   progress,
//   description,
//   purpose,
//   problem,
//   features,
//   pages,
//   techstack,
//   gallery,
// }: SlugContentProps) => {
//   const overviewData = [
//     { label: "Title", value: title, link: false },
//     { label: "Website Type", value: websiteType, link: false },
//     { label: "Role", value: role, link: false },
//     { label: "Github", value: "🔗 View Github", link: true },
//     { label: "Demo", value: "🚀 View Demo", link: true },
//     { label: "Progress", value: progress, link: false },
//   ];

//   const contextData = [
//     { label: "Description", value: description },
//     { label: "Purpose", value: purpose },
//     { label: "Problem", value: problem },
//   ];

//   const scopeData = [];

//   return (
//     <>
// <div className="grid gap-16 z-10 max-w-5xl mx-auto">
// <Image
//   src={gallery[0]}
//   alt={title}
//   className="border-2 border-neutral-700 rounded-xl shadow-sm shadow-black/50"
// />

//         <SlugHr />

//         <SlugSection id="slug-overview" title="Overview">
//           {overviewData.map((o) => (
//             <>
//               <p className="text-gray-400">{o.label}:</p>
//               {o.link ? (
//                 <LinkButton href={o.value} target="_blank" variant="secondary-button">
//                   {o.value}
//                 </LinkButton>
//               ) : (
//                 <p>{o.value}</p>
//               )}
//             </>
//           ))}
//         </SlugSection>

//         <SlugHr />

//         <SlugSection id="slug-context" title="Context">
//           {contextData.map((o) => (
//             <>
//               <p className="text-gray-400">{o.label}</p>
//               <p className="text-lg">{o.value}</p>
//             </>
//           ))}
//         </SlugSection>

//         <SlugHr />

//         <SlugSection id="slug-scope" title="Scope">
//           <>
//             <p>Features:</p>
//             <div>
//               {features.map((f) => (
//                 <p key={f}>✔️ {f}</p>
//               ))}
//             </div>
//           </>
//           <>
//             <p>Pages:</p>
//             <div>
//               {pages.map((p) => (
//                 <p key={p}>✔️ {p}</p>
//               ))}
//             </div>
//           </>
//           <>
//             <p>TechStack:</p>
//             <p>{techstack}</p>
//           </>
//         </SlugSection>

//         <SlugHr />

//         {/* <hr className={hrClass} />
//       <h3 className="text-4xl font-bold">Overview</h3>
//       <div className="grid grid-cols-2 grid-rows-2 max-w-3xl mx-auto">
//         <>
//           <p>Title:</p>
//           <p>{title}</p>
//         </>
//         <>
//           <p>Website Type:</p>
//           <p>{websiteType}</p>
//         </>
//         <>
//           <p>Role:</p>
//           <p>{role}</p>
//         </>
//         <>
//           <p>Repo:</p>
//           <p>{repo}</p>
//         </>
//         <>
//           <p>Demo:</p>
//           <p>{demo}</p>
//         </>
//         <>
//           <p>Progress:</p>
//           <p>{progress}</p>
//         </>
//       </div>
//       <hr className={hrClass} />
//       <h3 className="text-4xl font-bold">Context</h3>
//       <div className="grid grid-cols-2 grid-rows-2 max-w-3xl mx-auto gap-16">
//         <>
//           <p>Description:</p>
//           <p>{description}</p>
//         </>
//         <>
//           <p>Purpose:</p>
//           <p>{purpose}</p>
//         </>
//         <>
//           <p>Problem:</p>
//           <p>{problem}</p>
//         </>
//       </div>
//       <hr className={hrClass} />
//       <h3 className="text-4xl font-bold">Scope</h3>
//       <div className="grid grid-cols-2 grid-rows-2 max-w-3xl mx-auto">
//         <>
//           <p>Features:</p>
//           <div>
//             {features.map((f) => (
//               <p key={f}>✔️ {f}</p>
//             ))}
//           </div>
//         </>
//         <>
//           <p>Pages:</p>
//           <div>
//             {pages.map((p) => (
//               <p key={p}>✔️ {p}</p>
//             ))}
//           </div>
//         </>
//         <>
//           <p>TechStack:</p>
//           <p>{techstack}</p>
//         </>
//       </div>
//       <hr className={hrClass} />
//       <h3 className="text-4xl font-bold">Image Gallery</h3>
//       <div className="grid grid-cols-3 gap-8">
//         {gallery.map((g) => (
//           <Image key={g} src={g} alt={title} />
//         ))}
//       </div> */}
//       </div>
//       <SlugImageGallery gallery={gallery} />
//     </>
//   );
// };

// export default SlugContent;
