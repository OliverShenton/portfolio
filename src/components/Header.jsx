import NavBar from "./NavBar";

export default function Header() {
  const handleLinkClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -72;
      const yPosition = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: yPosition, behavior: "smooth" });
    }
  };

  return (
    <header className="fixed w-full bg-gradient-to-b from-[#2d2d2d] from-25% to-black z-10 top-0">
      <div className="flex items-center justify-between max-w-7xl mx-auto p-4">
        <h1 className="font-eaglelake text-blue-500 text-lg small:text-2xl">Oliver Shenton</h1>
        <NavBar onLinkClick={handleLinkClick} />
      </div>
    </header>
  );
}
