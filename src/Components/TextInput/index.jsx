export default function TextInput({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="p-1 rounded bg-gray-100 border border-gray-300 outline-none w-full"
    />
  );
}
