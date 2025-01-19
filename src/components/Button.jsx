export default function Button({ content }) {
  return (
    <button className="flex items-center justify-between gap-2 py-2 px-3 bg-orange-500 rounded-lg hover:bg-orange-600 hover:text-stone-50">
      {content}
    </button>
  );
}
