interface CustomHrProps {
  opaque?: boolean;
}

const CustomHr = ({ opaque }: CustomHrProps) => {
  return (
    <hr
      className={`${opaque ? "opacity-10" : "opacity-100"} w-full rounded-full text-[var(--hr)]`}
      role="presentation"
      aria-hidden="true"
    />
  );
};

export default CustomHr;
