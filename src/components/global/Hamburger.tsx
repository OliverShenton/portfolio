import ScrollProgress from "./ScrollProgress";

export default function Hamburger() {
  return (
    <div className="fixed p-2 rounded-[50%] bottom-5 right-5">
      <ScrollProgress>
        <div className="bg-red-500 rounded-[50%] cursor-pointer transition-all duration-500 ">
          <span role="img" aria-label="Hamburger" className="text-4xl w-full h-full">
            🍔
          </span>
        </div>
      </ScrollProgress>
      {/* <div className="absolute p-4 bg-red-500 rounded-[50%] cursor-pointer transition-all duration-500 hover:scale-105 flex items-center justify-center"></div> */}
    </div>
  );
}
