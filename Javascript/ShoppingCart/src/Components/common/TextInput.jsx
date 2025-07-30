export default function TextInput({
  value,
  setValue,
  label,
  type,
  placeholder,
}) {
  return (
    <div className="flex flex-col ">
      <label>{label}</label>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type={type}
        placeholder={placeholder}
        className="border-2 rounded mt-2  pl-2 h-10"
      />
    </div>
  );
}
