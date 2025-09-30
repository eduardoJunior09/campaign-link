export default function Search({onSearch}) {
  return (
    <div className="w-full lg:max-w-[400px] bg-gray-50 border border-gray-300 rounded-lg flex items-center justify-center gap-1 py-1 px-2">
      <i className="bi bi-search text-gray-500"></i>
      <input
        type="text"
        placeholder="Buscar por nome da campanha..."
        className="w-full text-gray-700 outline-0"
              onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}
