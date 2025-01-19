export default function SplitScreen({ left = "", right = "" }) {
  return (
    <div className="flex flex-col items-center large:flex-row justify-between max-w-7xl m-auto">
      <div className="flex-1 mb-4 medium:mb-0 medium:pr-8 large:pr-16">{left}</div>
      <div className="flex-1 medium:pl-8 large:pl-16">{right}</div>
    </div>
  );
}
