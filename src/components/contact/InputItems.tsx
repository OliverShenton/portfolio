interface InputItemsProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  required?: boolean;
}

export default function InputItems({ id, label, required = false, ...props }: InputItemsProps) {
  return (
    <div className="flex flex-col text-left">
      <label htmlFor={id} className="py-2 px-3">
        {label}
      </label>
      <input id={id} {...props} required={required} className="py-2 px-3" />
    </div>
  );
}
