export default function Section({
  title = "Default Title",
  content = "Default Description",
  style = {},
  id,
}) {
  return (
    <section className="w-full scroll-mt-[72px]" style={style} id={id}>
      <div className="m-auto max-w-7xl px-4 py-12 medium:py-24 large:px-12">
        <h2 className="text-xl mb-8 font-bold text-center uppercase small:text-2xl medium:mb-12 large:text-3xl">
          {title}
        </h2>
        <div className="px-4">{content}</div>
      </div>
    </section>
  );
}
