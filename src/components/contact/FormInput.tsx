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
      className="p-4 border flex-1"
    />
  );
};

export default FormInput;
