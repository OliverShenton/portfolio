import FooterSocialNavigation from "./FooterSocialNavigation";

const FooterSection = () => {
  return (
    <footer
      id="footer-section"
      className="text-center bg-[#0e0c10] border-t border-white/5 text-stone-400 relative z-30">
      <div className="space-y-12 px-6 md:px-8 py-12">
        <p className="text-sm">
          Design & code by Oliver Shenton. Built with care, shipped with curiosity.
        </p>
        <FooterSocialNavigation />
        <div className="flex flex-col items-center justify-center text-sm gap-4">
          <p>Deployed on Vercel</p>
          <p>Styled by Tailwind</p>
        </div>
        <p className="text-sm text-center">&copy; Oliver Shenton. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
