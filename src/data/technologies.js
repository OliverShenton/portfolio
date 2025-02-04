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
import postmanImg from "../assets/tech-postman.svg";
import frontendImg from "../assets/tech-title-frontend.svg";
import backendImg from "../assets/tech-title-backend.svg";
import testingImg from "../assets/tech-title-testing.png";
import toolsImg from "../assets/tech-title-tools.svg";

export const TECHSTACK = {
  frontend: [
    { name: "Frontend", image: frontendImg },
    { name: "HTML", image: htmlImg },
    { name: "CSS", image: cssImg },
    { name: "TailwindCSS", image: tailwindcssImg },
    { name: "JavaScript", image: javascriptImg },
    { name: "React", image: reactImg },
    { name: "Vite", image: viteImg },
  ],
  backend: [
    { name: "Backend", image: backendImg },
    { name: "Node.js", image: nodeImg },
    { name: "REST APIs", image: restapiImg },
    { name: "PostgreSQL", image: postgresqlImg },
    { name: "MongoDB", image: mongodbImg },
  ],
  testing: [
    { name: "Testing", image: testingImg },
    { name: "Postman", image: postmanImg },
    { name: "Jest", image: jestImg },
  ],
  tools: [
    { name: "Tools", image: toolsImg },
    { name: "Git", image: gitImg },
    { name: "NPM", image: npmImg },
    { name: "VSC", image: vscImg },
  ],
};
