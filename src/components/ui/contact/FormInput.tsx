type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
};

const FormInput = ({
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  icon,
  ...rest
}: FormInputProps) => {
  return (
    <div
      className="flex items-center border border-neutral-500 rounded-xl
        focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
      {icon && <span className="flex items-center p-4 text-neutral-500">{icon}</span>}
      <input
        id={id}
        type={type}
        name={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full py-4 focus:outline-none"
        {...rest}
      />
    </div>
  );
};

export default FormInput;
