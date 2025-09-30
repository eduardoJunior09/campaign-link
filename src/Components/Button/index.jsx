const styles = {
  editar: " hover:bg-blue-600 hover:text-gray-50",
  remover: "hover:bg-red-600 hover:text-gray-50",
};

export default function ButtonCard({ label, icon, onClick }) {
  let labelStyle = label.toLowerCase();
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center text-gray-700 bg-gray-100 font-semibold rounded gap-2 w-[100%] md:w-[50%] px-3 py-1 transition all ease-in-out delay-100 cursor-pointer ${styles[labelStyle]}`}
    >
      {icon}
      {label}
    </button>
  );
}
