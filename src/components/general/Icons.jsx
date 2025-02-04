import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Icons() {
  return (
    <div className="flex items-center justify-center gap-4 text-3xl">
      <a
        href="https://www.linkedin.com/in/olivershenton"
        target="_blank"
        className="hover:text-blue-500">
        <FaLinkedin />
      </a>
      <a href="https://github.com/olivershenton" target="_blank" className="hover:text-blue-500">
        <FaGithub />
      </a>
    </div>
  );
}
