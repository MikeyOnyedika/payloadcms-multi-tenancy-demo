type Props = {
  label: string;
  name: string;
  type?: "text" | "password";
  placeholder?: string;
  onChange: (update: { [key: string]: string }) => void
  value: string,
  errorMsg?: string
};

export default function TextInput({
  type = "text",
  label,
  name,
  placeholder = "",
  onChange,
  value,
  errorMsg = ""
}: Props) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="capitalize">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        className="rounded p-2 border-gray-400 border-[1px] focus:outline-blue-400"
        placeholder={placeholder}
        onChange={(e) => onChange({ [name]: e.target.value })}
        value={value}
      />
      {errorMsg && <p className="text-red-400 text-sm">{errorMsg}</p>}
    </div>
  );
}
