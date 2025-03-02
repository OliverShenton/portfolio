interface AboutButtonProps {
  text: string;
}

export default function AboutButtons({ text }: AboutButtonProps) {
  return (
    <button className="cursor-pointer rounded-xl py-2 px-7 border border-black bg-gradient-to-br from-black to-[#111111] hover:bg-gradient-to-br hover:from-black hover:to-[#222222] transition-all duration-1000">
      {text}
    </button>
  );
}
