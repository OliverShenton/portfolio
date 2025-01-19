export default function Quote({ text, author, mb = "" }) {
  return (
    <div className={`${mb}`}>
      <q className="text-yellow-500 text-2xl medium:text-3xl large:text-4xl font-playfair">
        {text}
      </q>
      <p className="mt-2">-- {author}</p>
    </div>
  );
}
