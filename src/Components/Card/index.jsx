import { Link, useNavigate } from "react-router-dom";
import ButtonCard from "../Button";
import Campanha from "./../../Pages/Campanha";

export default function Card({ dados, onRemove }) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit/${dados.id}`);
  };

   const handleRemove = () => {
    if (window.confirm(`Tem certeza que deseja remover "${dados.nome}"?`)) {
      onRemove(dados.id);
    }
  };
  return (
    <div className="bg-white flex items-center justify-center flex-col gap-3 p-1 w-full  h-[180px] md:h-[150px] rounded-lg border border-gray-300  shadow-xl ">
      <div className="flex items-center gap-1 w-full">
        <i className="bi bi-whatsapp text-2xl text-green-800"></i>
        <Link
          className="font-semibold truncate text-green-800"
          to={`/viewCampaign/${dados.id}`}
        >
          {dados.nome}
        </Link>
      </div>
      <div className="w-full">
        <span className="text-gray-700">Cliques: {dados.cliques}</span>
      </div>
      <div className=" flex flex-col md:flex-row gap-1 w-full">
        <ButtonCard
          icon={<i className="bi bi-pencil"></i>}
          label="Editar"
          onClick={handleEdit}
        />
        <ButtonCard icon={<i className="bi bi-trash"></i>} label="Remover"  onClick={handleRemove}/>
      </div>
    </div>
  );
}
