const styles = {
  cancelar: "text-gray-600 border-gray-600",
  salvar: "bg-green-600 border-green-600 text-white",
};

export default function ButtonAction({ label, onClick }) {
  let labelStyle = label.toLowerCase();
  return (
    <button
      className={`px-3 py-1 font-semibold rounded cursor-pointer border-2 ${styles[labelStyle]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
