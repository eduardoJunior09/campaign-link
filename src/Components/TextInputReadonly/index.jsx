export default function TextInputReadonly({ value, readOnly = false }) {
  return (
    <input
      type="text"
      value={value}      
      readOnly={readOnly} 
      className="p-1 rounded bg-gray-100 border border-gray-300 outline-none w-full"
    />
  );
}
