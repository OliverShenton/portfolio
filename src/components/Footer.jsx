import Icons from "./general/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center p-4 gap-3 bg-[#5e503f] dark:bg-[#121212] text-[#eaeaea]">
      <Icons />
      <div className="flex flex-col medium:flex-row items-center justify-center gap-2">
        <a href="mailto:olivermshenton@outlook.com" className="hover:text-blue-500">
          olivermshenton@outlook.com
        </a>
        <span>|</span>
        <p>(+44) 7473826533</p>
        <span>|</span>
        <a
          href="https://www.google.co.uk/maps/place/Sandbach/@53.1399386,-2.3748208,14z/"
          className="hover:text-blue-500"
          target="_blank"
          rel="noopener noreferrer">
          Sandbach, Cheshire, CW11
        </a>
      </div>
      <p>Last updated: 20th January 2025</p>
      <p>&copy; {currentYear} Oliver Shenton's Portfolio</p>
    </footer>
  );
}
