import FooterSocialNavigation from "./FooterSocialNavigation";

const Footer = () => {
  return (
    <footer id="footer" className=" space-y-4 px-4 py-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-gray-200">
        <p>&copy; Oliver Shenton. All rights reserved.</p>
        <FooterSocialNavigation />
      </div>
    </footer>
  );
};

export default Footer;
