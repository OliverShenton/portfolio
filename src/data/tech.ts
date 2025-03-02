import { MdMonitor } from "react-icons/md";
import htmlImg from "../assets/tech/html5.png";
import cssImg from "../assets/tech/css3.png";
import tailwindImg from "../assets/tech/tailwind.png";
import javascriptImg from "../assets/tech/javascript.png";
import typescriptImg from "../assets/tech/typescript.png";
import reactImg from "../assets/tech/react.png";
import viteImg from "../assets/tech/vite.png";
import { FaDatabase } from "react-icons/fa";
import nodeImg from "../assets/tech/node.png";
import apisImg from "../assets/tech/apis.png";
import postgresqlImg from "../assets/tech/postgresql.png";
import mongodb from "../assets/tech/mongo.png";
import postmanImg from "../assets/tech/postman.png";
import jestImg from "../assets/tech/jest.png";
import { FaBug } from "react-icons/fa";
import gitImg from "../assets/tech/git.png";
import npmImg from "../assets/tech/npm.png";
import vscImg from "../assets/tech/vsc.png";
import { FaGear } from "react-icons/fa6";
import { image } from "framer-motion/client";

export const TECHSTACK = [
  {
    type: "frontend",
    tech: [
      { name: "Frontend", image: MdMonitor },
      { name: "HTML", image: htmlImg },
      { name: "CSS", image: cssImg },
      { name: "Tailwind", image: tailwindImg },
      { name: "JavaScript", image: javascriptImg },
      { name: "TypeScript", image: typescriptImg },
      { name: "React", image: reactImg },
      { name: "Vite", image: viteImg },
    ],
  },
  {
    type: "backend",
    tech: [
      { name: "Backend", image: FaDatabase },
      { name: "Node.js", image: nodeImg },
      { name: "REST APIs", image: apisImg },
      { name: "PostgreSQL", image: postgresqlImg },
      { name: "MongoDB", image: mongodb },
    ],
  },
  {
    type: "testing",
    tech: [
      { name: "Testing", image: FaBug },
      { name: "Postman", image: postmanImg },
      { name: "Jest", image: jestImg },
    ],
  },
  {
    type: "tools",
    tech: [
      { name: "Tools", image: FaGear },
      { name: "Git", image: gitImg },
      { name: "NPM", image: npmImg },
      { name: "VSC", image: vscImg },
    ],
  },
];
