type FormInputProps = {
  id: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput = ({ id, type = "text", value, onChange, placeholder }: FormInputProps) => {
  return (
    <input
      id={id}
      type={type}
      name={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="p-4 border border-neutral-800 rounded-xl focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
    />
  );
};

export default FormInput;
