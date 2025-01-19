import htmlImg from "../assets/tech-html5.png";
import cssImg from "../assets/tech-css3.svg";
import tailwindcssImg from "../assets/tech-tailwindcss.svg";
import javascriptImg from "../assets/tech-javascript.png";
import nodeImg from "../assets/tech-node.svg";
import npmImg from "../assets/tech-npm.svg";
import reactImg from "../assets/tech-react.svg";
import postgresqlImg from "../assets/tech-postgresql.svg";
import mongodbImg from "../assets/tech-mongodb.svg";
import gitImg from "../assets/tech-git.svg";
import vscImg from "../assets/tech-vsc.svg";
import viteImg from "../assets/tech-vite.png";
import jestImg from "../assets/tech-jest.png";
import restapiImg from "../assets/tech-rest-api.png";

export const TECHSTACK = {
  frontend: [
    { name: "HTML", image: htmlImg },
    { name: "CSS", image: cssImg },
    { name: "TailwindCSS", image: tailwindcssImg },
    { name: "JavaScript", image: javascriptImg },
    { name: "React", image: reactImg },
    { name: "Vite", image: viteImg },
  ],
  backend: [
    { name: "Node.js", image: nodeImg },
    { name: "PostgreSQL", image: postgresqlImg },
    { name: "MongoDB", image: mongodbImg },
    { name: "Jest", image: jestImg },
    { name: "REST APIs", image: restapiImg },
  ],
  other: [
    { name: "NPM", image: npmImg },
    { name: "Git", image: gitImg },
    { name: "Visual Studio Code", image: vscImg },
  ],
};
