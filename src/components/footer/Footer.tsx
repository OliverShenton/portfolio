import FooterSocialNavigation from "./FooterSocialNavigation";

const Footer = () => {
  return (
    <footer
      id="footer"
      aria-label="Footer"
      className="text-center bg-[var(--background)] text-[var(--secondary-text)] text-sm z-30">
      <div className="space-y-12 px-4 py-12 md:px-6">
        <p>Design & code by Oliver Shenton. built with care, and shipped with curiosity.</p>
        <FooterSocialNavigation />
        <div className="space-y-4">
          <p>Deployed on Vercel</p>
          <p>Styled by Tailwind</p>
        </div>
        <p className="text-center">&copy; Oliver Shenton. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
