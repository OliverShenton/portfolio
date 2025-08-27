import Hr from "../global/Hr";
import FooterSocialNavigation from "./FooterSocialNavigation";

const FooterSection = () => {
  return (
    <footer id="footer-section" className="relative z-50">
      <div className="max-w-[88rem] mx-auto space-y-12 px-6 md:px-8 py-12">
        {/* <Hr /> */}
        <div className="flex flex-col md:flex-row gap-12 items-center justify-between text-gray-300">
          <p className="text-base text-center">&copy; Oliver Shenton. All rights reserved.</p>
          <FooterSocialNavigation />
        </div>
        <Hr opaque />
        <div className="flex flex-col items-center justify-center text-sm text-gray-300 gap-2">
          <p>Deployed on Vercel</p>
          <p>Styled by Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
