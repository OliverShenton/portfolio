export default function Button({ text = "", variant = "primary" }) {
  const variantStyles = {
    primary: "bg-orange-500 hover:bg-orange-600",
    secondary: "bg-blue-500 hover:blue-600",
  };

  return (
    <button
      className={`rounded-lg py-2 px-3 medium:py-3 medium:px-4 text-white ${variantStyles[variant]}`}>
      {text}
    </button>
  );
}
