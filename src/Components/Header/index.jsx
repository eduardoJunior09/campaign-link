import { Link } from "react-router-dom";
import Campanha from "./../../Pages/Campanha";

export default function Header() {
  return (
    <div className="flex items-center justify-between w-full bg-gray-100 p-4 shadow">
      <div>
        <p className="font-semibold">Logo + Name</p>
      </div>
      <div className="flex items-center gap-4">
        <Link className=" font-semibold text-lg text-gray-600 hover:text-gray-900 transition all delay-200 underline" to={`/`}>
          Página Inicial
        </Link>
        <button className="rounded-sm py-1 px-2 text-gray-50 bg-gray-700">
          Logout
        </button>
      </div>
    </div>
  );
}
