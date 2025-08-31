const Hr = ({ opaque }: { opaque?: boolean }) => {
  return (
    <hr
      className={`w-full text-neutral-700 rounded-full ${opaque ? "opacity-10" : ""}`}
      role="presentation"
      aria-hidden="true"
    />
  );
};

export default Hr;
