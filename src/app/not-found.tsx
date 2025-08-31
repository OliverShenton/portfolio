import Section from "@/components/ui/global/SectionContainer";
import Link from "next/link";

const NotFound = () => {
  return (
    <Section id="not-found" fullScreen>
      <h1 className="font-extrabold text-6xl sm:text-7xl md:text-8xl tracking-[10px] bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500">
        Oops
      </h1>
      <p role="alert">404 - Page Not Found</p>
      <Link
        href="/"
        className="border border-gray-500 text-gray-200 hover:border-white hover:text-white transition-colors px-6 py-3 rounded-xl font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
        Return Home
      </Link>
    </Section>
  );
};

export default NotFound;
