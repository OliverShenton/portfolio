export default function Quote({ text, author }) {
  return (
    <div>
      <q className="text-blue-600 dark:text-yellow-500 font-semibold font-cormorant italic text-xl small:text-2xl medium:text-3xl large:text-4xl xlarge:text-5xl">
        {text}
      </q>
      <p className="mt-2 text-stone-600 dark:text-stone-400 text-[12px] small:text-sm medium:text-base">
        -- {author}
      </p>
    </div>
  );
}
