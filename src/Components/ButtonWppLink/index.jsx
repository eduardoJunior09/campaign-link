const styles = {
  remove: "bg-red-600 hover:bg-red-700",
  add: "bg-green-600 hover:bg-green-700",
  copy: "bg-gray-500 hover:bg-gray-600"
};

export default function ButtonWppLink({ label , icon, onClick}) {
  let labelStyle = label.toLowerCase();
  return (
    <button
      className={`px-3 py-1 text-white rounded cursor-pointer border-2 transition all ease-in-out delay-100 ${styles[labelStyle]}`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
}

