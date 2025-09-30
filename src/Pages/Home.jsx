import { useEffect, useState } from "react";
import ButtonCampanha from "../Components/ButtonCampanha";
import Card from "../Components/Card";
import Search from "../Components/Search";

import CampanhaData from "../data/db.json";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [campanhas, setCampanhas] = useState(CampanhaData.campanhas);
  const [busca, setBusca] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (busca === "") {
      setCampanhas(CampanhaData.campanhas);
    } else {
      const filtradas = CampanhaData.campanhas.filter((c) =>
        c.nome.toLowerCase().includes(busca.toLowerCase())
      );
      setCampanhas(filtradas);
    }
  }, [busca]);

  const handleCampanha = () => {
    navigate(`/campaign`);
  };

  const handleRemove = (id) => {
    console.log(campanhas.length);
    setCampanhas((prev) => prev.filter((camp) => camp.id !== id));
  };

  console.log(CampanhaData);
  return (
    <div className="w-full max-w-[1350px]">
      <div className="flex flex-col w-full p-2 gap-3">
        <div className="flex flex-col gap-1">
          <div className="flex flex-col items-start justify-center gap-1 w-full p-3 ">
            <p className="font-semibold text-2xl text-gray-700">Campanhas</p>
            <hr className="w-full border-gray-700" />
          </div>
          <div className=" flex items-center justify-center flex-col md:justify-end lg:flex-row  gap-2 w-full p-2 ">
            <Search onSearch={setBusca} />
            <ButtonCampanha onClick={handleCampanha} />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 flex-wrap">
          {campanhas.map((c) => (
            <Card key={c.id} dados={c} onRemove={handleRemove} />
          ))}
        </div>
      </div>
    </div>
  );
}
