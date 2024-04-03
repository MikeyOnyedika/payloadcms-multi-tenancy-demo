type Props = {
  label: string;
  name: string;
  type?: "text" | "password";
  placeholder?: string;
};

export default function TextInput({
  type = "text",
  label,
  name,
  placeholder = "",
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
        className="rounded p-2 border-gray-400 border-[1px]"
        placeholder={placeholder}
      />
    </div>
  );
}
