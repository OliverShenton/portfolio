import Socials from "./Socials";

const Footer = () => {
  return (
    <footer id="footer" className=" space-y-4 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-gray-200">
        <p>&copy; Oliver Shenton. All rights reserved.</p>
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
