import { PROJECTS_S, PROJECTS_L } from "../data/projects";
import { FaGithub } from "react-icons/fa";
import Quote from "./Quote";

const ProjectCard = ({ project, isLarge }) => (
  <article className={`bg-stone-100 ${isLarge ? "w-[300px]" : "w-64"} text-[#333] z-0`}>
    <img src={project.image} alt={project.name} loading="lazy" className="w-full h-auto" />
    <div className="p-4">
      <h2 className={`font-bold mb-1 ${isLarge ? "text-xl" : ""}`}>{project.name}</h2>
      <p className={`${isLarge ? "text-stone-600" : "text-sm"} mb-4`}>{project.description}</p>
      <div className="flex items-center justify-end">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 rounded border-2 bg-blue-500 hover:bg-blue-600 text-stone-50">
          <FaGithub />
          <p>Source Code</p>
        </a>
      </div>
    </div>
  </article>
);

export default function Projects() {
  return (
    <>
      <div className="text-center">
        <Quote
          text={"Every project is an opportunity to learn."}
          author={"David Rockwell"}
          mb="mb-8 medium:mb-16"
        />
      </div>
      <div className="flex items-center justify-center gap-8 flex-wrap large:hidden">
        {PROJECTS_S.map((project, index) => (
          <ProjectCard key={index} project={project} isLarge={false} />
        ))}
      </div>
      <div className="hidden items-center justify-center gap-8 flex-wrap large:flex">
        {PROJECTS_L.map((project, index) => (
          <ProjectCard key={index} project={project} isLarge={true} />
        ))}
      </div>
      <div className="text-center mt-8 large:mt-16">
        <p className="text-sm medium:text-lg">Want to view more projects?</p>
        <p className="text-sm medium:text-lg">
          Check out my{" "}
          <a
            className="text-lg medium:text-xl text-orange-500 hover:text-orange-600"
            href="https://github.com/OliverShenton"
            target="_blank">
            GitHub
          </a>{" "}
          profile
        </p>
      </div>
    </>
  );
}
