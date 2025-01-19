import { useState } from "react";
import Button from "./Button";
import { IoMdDownload } from "react-icons/io";
import cvpdf from "../assets/oliver-shenton.pdf";

export default function NavBar({ onLinkClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "#about", label: "About", breakpoint: "small:block" },
    { href: "#technology", label: "Technology", breakpoint: "large:block" },
    { href: "#projects", label: "Projects", breakpoint: "small:block" },
    { href: "#experience", label: "Experience", breakpoint: "xlarge:block" },
    { href: "#contact", label: "Contact", breakpoint: "small:block" },
  ];

  const handleLinkClick = (id) => {
    setIsMenuOpen(false);
  };

  const renderLinks = (isSmallScreen) =>
    links.map((link, index) => (
      <li
        key={index}
        className={`hidden text-xl hover:text-yellow-500 ${
          !isSmallScreen ? link.breakpoint || "" : ""
        }`}>
        <a href={link.href} onClick={() => handleLinkClick(link.href)} className="font-playfair">
          {link.label}
        </a>
      </li>
    ));

  const spanCSSClass =
    "absolute h-[2px] w-full bg-white transform transition-all duration-300 ease-in-out";

  return (
    <nav>
      {/* Small Screen Navigation */}
      <ul className="flex medium:hidden gap-4">
        {renderLinks(true)}
        <Button
          content={
            <a href={cvpdf} target="_blank">
              <IoMdDownload />
            </a>
          }
        />
        <Button
          content={
            <div
              className="relative w-4 h-6 flex flex-col justify-center items-center cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu">
              <span
                className={`${spanCSSClass} ${
                  isMenuOpen ? "rotate-45 translate-y-[0px]" : "translate-y-[-8px]"
                }`}></span>
              <span
                className={`${spanCSSClass} ${isMenuOpen ? "opacity-0" : "opacity-100"}`}></span>
              <span
                className={`${spanCSSClass} ${
                  isMenuOpen ? "-rotate-45 -translate-y-[0px]" : "translate-y-[8px]"
                }`}></span>
            </div>
          }
        />
      </ul>

      {/* Large Screen Navigation */}
      <ul className="hidden items-center gap-6 medium:flex">
        {renderLinks(false)}
        <Button
          content={
            <a className="flex items-center gap-2" href={cvpdf} target="_blank">
              <IoMdDownload />
              <p>Download</p>
            </a>
          }
        />
      </ul>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 top-[72px] bg-black transform transition-[max-height] duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-[calc(100vh-72px)]" : "max-h-0"
        }`}>
        <div className="flex items-center justify-center h-[calc(100vh-72px)]">
          <ul className="flex flex-col items-center gap-10">
            {links.map((link, index) => (
              <li key={index} className="text-xl">
                <a
                  href={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="hover:text-yellow-500">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
