export default function SplitScreen({
  left = "",
  right = "",
  leftVisible = "",
  rightVisible = "",
}) {
  return (
    <div className="flex flex-col items-center large:flex-row justify-between max-w-7xl mx-auto gap-4 large:gap-8">
      <div className={`flex-1 ${leftVisible}`}>{left}</div>
      <div className={`flex-1 ${rightVisible}`}>{right}</div>
    </div>
  );
}
