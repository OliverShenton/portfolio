import Quote from "./Quote";

export default function Hero() {
  return (
    <div id="hero" className="min-h-screen">
      <div className="min-h-screen m-auto max-w-7xl p-8 flex flex-col justify-center">
        <p className="text-5xl medium:text-6xl large:text-7xl mb-4">Hi, I'm Oliver Shenton</p>
        <p className="text-3xl medium:text-4xl large:text-5xl mb-4">I build websites</p>
        <Quote text={"Excellence is not a skill. It is an attitude."} author={"Ralph Marston"} />
      </div>
    </div>
  );
}
