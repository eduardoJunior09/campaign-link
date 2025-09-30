export default function ButtonCampanha({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-1 w-full lg:w-[200px] px-2 py-1 bg-green-600 hover:bg-green-700 text-white rounded cursor-pointer transition all ease-in-out delay-150"
    >
      Nova Campanha
    </button>
  );
}
