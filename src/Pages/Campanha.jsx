import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import ButtonAction from "../Components/ButtonAction";
import ButtonWppLink from "../Components/ButtonWppLink";
import FoneAdd from "../Components/FoneAdd";
import ShowDiv from "../Components/ShowDiv";
import Text from "../Components/Text";
import TextInput from "../Components/TextInput";
import TextSpan from "../Components/TextSpan";

export default function Campanha({ campanha }) {
  // 🔑 Formulário unificado
  const [formData, setFormData] = useState({
    nome: campanha?.nome || "",
    responsavel: campanha?.responsavel || "",
    link: campanha?.link || "",
  });

  const [linkWpp, setLinkWpp] = useState("");
  const [wppError, setWppError] = useState(false);
  const [inputTrim, setInputTrim] = useState(false);
  const [whatsapps, setWhatsapps] = useState(campanha?.whatsapps || []);

  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddWpp = () => {
    if (linkWpp.trim() === "") {
      setWppError(true);
      return;
    }

    setWhatsapps((prev) => [...prev, linkWpp]);
    setLinkWpp("");
    setWppError(false);
    toast.success("WhatsApp adicionado!");
  };

  const handleRemoveWpp = (index) => {
    setWhatsapps((prev) => prev.filter((_, i) => i !== index));
    toast.success("WhatsApp removido!");
  };

  const handleSalvar = () => {
    if (
      !formData.nome.trim() ||
      !formData.responsavel.trim() ||
      !formData.link.trim() ||
      whatsapps.length === 0
    ) {
      toast.error("Preencha todos os campos obrigatórios!");
      setInputTrim(true);
      return;
    }

    const campanhaData = {
      ...formData,
      whatsapps,
    };

    console.log("Dados da campanha:", campanhaData);
    toast.success("Campanha criada com sucesso!");
    setInputTrim(false);

    setTimeout(() => navigate("/"), 3000);
  };

  const handleHome = () => navigate("/");

  return (
    <div className="w-full max-w-[1350px]">
      <div className="flex flex-col items-start justify-center gap-1 w-full p-3">
        <p className="font-semibold text-2xl text-gray-700">Nova Campanha</p>
        <hr className="w-full border-gray-700" />
      </div>

      <div className="flex flex-col gap-3 w-full p-3">
        {/* Nome e responsável */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <ShowDiv>
            <TextSpan label="Nome da Campanha*" />
            <TextInput
              placeholder="Digite o nome da campanha..."
              value={formData.nome}
              onChange={(e) => handleChange("nome", e.target.value)}
            />
          </ShowDiv>

          <ShowDiv>
            <TextSpan label="Responsável*" />
            <TextInput
              placeholder="Digite o nome do responsável..."
              value={formData.responsavel}
              onChange={(e) => handleChange("responsavel", e.target.value)}
            />
          </ShowDiv>
        </div>

        {/* Link da campanha */}
        <div className="flex flex-col gap-3 w-full">
          <ShowDiv>
            <TextSpan label="Link*" />
            <Text text="Complete o campo abaixo informando a URL desejada. Exemplo: https://dominio.com/testeCampanha" />
          </ShowDiv>
          <div className="flex items-center gap-1 p-1">
            <span>https://dominio.com/</span>
            <TextInput
              placeholder="Digite aqui..."
              value={formData.link}
              onChange={(e) => handleChange("link", e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <ShowDiv>
            <TextSpan label="WhatsApp Link*" />
            <Text text="Adicione pelo menos um número para redirecionamento de mensagem. O formato do link deve seguir o padrão: wa.me" />
          </ShowDiv>

          <div className="flex gap-1 w-full">
            <TextInput
              placeholder="Digite aqui..."
              value={linkWpp}
              onChange={(e) => setLinkWpp(e.target.value)}
            />
            <ButtonWppLink
              label="add"
              icon={<i className="bi bi-plus-circle"></i>}
              onClick={handleAddWpp}
            />
          </div>

          {wppError && (
            <p className="text-red-600 font-semibold">
              Preencha o campo corretamente!
            </p>
          )}

          {whatsapps.length > 0 ? (
            <div className="flex flex-col gap-1 w-full border border-gray-300 rounded p-2">
              <Text text="WhatsApps Adicionados" />
              <div className="flex flex-col h-auto max-h-[300px] overflow-y-auto gap-2 w-full">
                {whatsapps.map((wpp, index) => (
                  <FoneAdd
                    key={index}
                    wpp={wpp}
                    index={index}
                    onRemove={handleRemoveWpp}
                  />
                ))}
              </div>
            </div>
          ) : (
            <Text text="Nenhum WhatsApp foi adicionado à campanha." />
          )}
        </div>
      </div>

      {inputTrim && (
        <p className="text-red-600 font-semibold">
          Preencha todos os campos obrigatórios antes de salvar!
        </p>
      )}

      <div className="flex items-center justify-end gap-2 w-full p-2">
        <ButtonAction label="Cancelar" onClick={handleHome} />
        <ButtonAction label="Salvar" onClick={handleSalvar} />
      </div>
    </div>
  );
}
