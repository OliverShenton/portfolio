export default function FormItem({
  text = "",
  example = "",
  type = "text",
  name = "",
  required = false,
}) {
  const id = text.toLowerCase().replace(/\s+/g, "-");
  const sizeStyle =
    "text-[10px] small:text-[12px] medium:text-[14px] large:text-[16px] xlarge:text-[18px]";
  const inputStyles =
    "rounded-lg px-4 py-2 bg-white text-gray-700 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none w-full";

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className={`mb-1 text-gray-700 dark:text-gray-200 ${sizeStyle}`}>
        {text} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={example}
        className={`${inputStyles} ${sizeStyle}`}
        required={required}
      />
    </div>
  );
}
