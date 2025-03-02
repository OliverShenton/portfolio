export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#1a1a2e] to-[#000000] flex flex-col items-center justify-center gap-4 px-4 py-12">
      <div className="flex flex-col md:flex-row gap-4">
        <a
          href="mailto:olivermshenton@outlook.com?subject=Inquiry: "
          className="hover:text-yellow-500">
          olivermshenton@outlook.com
        </a>
        <span>|</span>
        <p>(+44) 7473826533</p>
        <span>|</span>
        <a
          href="https://www.google.co.uk/maps/place/Sandbach/@53.1399386,-2.3748208,14z/"
          className="hover:text-yellow-500"
          target="_blank"
          rel="noopener noreferrer">
          Sandbach, Cheshire, CW11
        </a>
      </div>
      <p>&copy; {currentYear} Oliver Shenton's Portfolio</p>
    </footer>
  );
}
