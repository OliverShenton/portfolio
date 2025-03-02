// import Section from "../global/Section";
// import IconSet from "../hero/IconSet";

// import tailwindImg from "../../assets/tech/tailwind.png";
// import AboutButtons from "./AboutButtons";

// const TECH = ["JavaScript", "Tailwind", "React", "Node.js"];
// const ICONS = [
//   { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/olivershenton/" },
//   { icon: <FaGithub />, link: "https://github.com/OliverShenton" },
//   { icon: <MdOutlineMailOutline /> },
// ];

// export default function About() {
//   return (
//     <Section
//       title="About Me"
//       background="bg-gradient-to-b from-[#000000] to-[#1a1a2e]"
//       fullScreen={true}>
//       <div className="flex">
//         <div className="flex-1">
//           <h2>Hello, my name is</h2>
//           <h2>Oliver Shenton</h2>
//           <h2>Frontend Developer</h2>
//           <p>
//             Bringing modern, and elegant frontend development to life, by crafting smooth, highly
//             optimised and respinsive web experiences.
//           </p>
//           <div className="flex">
//             {TECH.map((item, index) => (
//               <p key={index}>{item}</p>
//             ))}
//           </div>
//           <div className="flex">
//             <AboutButtons text="Download CV" icon />
//             <AboutButtons text="Get In Touch" icon />
//           </div>
//         </div>
//         <div className="flex-1">
//           <img src={tailwindImg} />
//         </div>
//       </div>

/* <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-8 lg:gap-12">
        
        <div className="flex-1 flex flex-col gap-2 md:gap-3 lg:gap-4 text-center md:text-left">
          <div>
            <h2 className="font-bold text-[clamp(1.5rem,4vw,2.5rem)] leading-tight">
              Hello, my name is
            </h2>
            <h2 className="font-bold text-[clamp(1.5rem,4vw,2.5rem)] leading-tight">
              Oliver Shenton
            </h2>
          </div>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-[clamp(1.5rem,4vw,2.5rem)] font-bold">
            Frontend Developer
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
            I love bringing designs to life through modern, and elegant frontend development,
            crafting smooth, and high-performance web experiences.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {TECH.map((item, index) => (
              <p
                key={index}
                className="px-5 py-2 rounded-4xl border border-[#a78bfa] bg-indigo-950 text-sm">
                {item}
              </p>
            ))}
          </div>
          <div className="flex gap-4">
            <AboutButtons text="Download CV" icon={<IoMdDownload />} />
            <AboutButtons text="Get In Touch" icon="🚀" />
          </div>
          <IconSet icons={ICONS} />
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={tailwindImg}
            alt="Tailwind CSS"
            className="max-w-[80%] md:max-w-[60%] lg:max-w-[50%]"
          />
        </div>
      </div>
      <div className="flex justify-evenly">
        <div>
          <h3>Projects</h3>
        </div>
        <div>
          <h3>Qualifications</h3>
        </div>
        <div>
          <h3>Years of Experience</h3>
        </div>
      </div> */

/* </Section>
  );
} */

import IconSet from "../global/IconSet";
import Section from "../global/Section";
import AboutButtons from "./AboutButtons";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const SKILLS = ["React", "Tailwind", "JavaScript", "Node.js"];
const ICONS = [
  { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/olivershenton/" },
  { icon: <FaGithub />, link: "https://github.com/OliverShenton" },
  { icon: <MdOutlineMailOutline /> },
];

export default function About() {
  return (
    <Section sectionCentered backgroundFlip fullScreenOnly>
      <div className="flex flex-col text-center md:flex-row">
        <div className="flex flex-col flex-1 gap-6 md:text-left">
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl">Hello, I am a...</h1>
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 uppercase font-bold text-5xl">
              Frontend Developer
            </h1>
          </div>
          <p className="md:text-lg lg:text-xl">
            Crafting visually stunning, highly optimized, and seamlessly responsive web experiences
            with elegant frontend technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:justify-normal">
            {SKILLS.map((skill, index) => (
              <p
                key={index}
                className="border border-gray-500 py-1 px-4 rounded-xl bg-gradient-to-br from-[#301934] to-[#00008b]">
                {skill}
              </p>
            ))}
          </div>
          <div className="flex justify-center md:justify-normal gap-1">
            <AboutButtons text="Download CV" />
            <AboutButtons text="Get In Touch" />
          </div>
          <div className="flex justify-center md:justify-normal">
            <IconSet icons={ICONS} />
          </div>
        </div>
        <div className="flex flex-1 md:text-right"></div>
      </div>
      <div></div>
    </Section>
  );
}
