import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import ButtonAction from "../Components/ButtonAction";
import ButtonWppLink from "../Components/ButtonWppLink";
import FoneAdd from "../Components/FoneAdd";
import ShowDiv from "../Components/ShowDiv";
import Text from "../Components/Text";
import TextInput from "../Components/TextInput";
import TextSpan from "../Components/TextSpan";
import TextInputReadonly from "../Components/TextInputReadonly";
import toast from "react-hot-toast";

import CampanhaData from "../data/db.json";

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const campanha = CampanhaData.campanhas.find(
    (item) => item.id === Number(id)
  );

  const [formData, setFormData] = useState({
    nome: campanha?.nome || "",
    responsavel: campanha?.responsavel || "",
  });

  const [whatsapps, setWhatsapps] = useState(campanha?.whatsapps || []);
  const [linkWpp, setLinkWpp] = useState("");
  const [wppError, setWppError] = useState(false);
  const [inputTrim, setInputTrim] = useState(false);

  const handleAddWpp = () => {
    if (linkWpp.trim() === "") {
      setWppError(true);
      return;
    }
    setWhatsapps((prev) => [...prev, linkWpp]);
    setLinkWpp("");
    setWppError(false);
  };

  const handleRemoveWpp = (index) => {
    setWhatsapps((prev) => prev.filter((_, i) => i !== index));
  };

  const handleHome = () => {
    navigate(`/`);
  };

  const handleSave = () => {
    if (
      !formData.nome.trim() ||
      !formData.responsavel.trim() ||
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

    console.log("Dados salvos:", campanhaData);
    toast.success("Campanha atualizada com sucesso!");
    setInputTrim(false);

    setTimeout(() => navigate("/"), 3000);
  };

  return (
    <div className="w-full max-w-[1350px]">
      <div className="flex flex-col items-start justify-center gap-1 w-full p-3">
        <p className="font-semibold text-2xl text-gray-700">Editar Campanha</p>
        <hr className="w-full border-gray-700" />
      </div>

      <div className="flex flex-col gap-3 w-full p-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <ShowDiv>
            <TextSpan label="Nome da Campanha*" />
            <TextInput
              placeholder="Digite o nome da campanha..."
              value={formData.nome}
              onChange={(e) =>
                setFormData({ ...formData, nome: e.target.value })
              }
            />
          </ShowDiv>

          <ShowDiv>
            <TextSpan label="Responsável*" />
            <TextInput
              placeholder="Digite o nome do responsável..."
              value={formData.responsavel}
              onChange={(e) =>
                setFormData({ ...formData, responsavel: e.target.value })
              }
            />
          </ShowDiv>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <ShowDiv>
            <TextSpan label="Link" />
            <Text text="O link da campanha não pode ser alterado." />
          </ShowDiv>
          <div className="flex items-center justify-center gap-1 w-full">
            <TextInputReadonly value={campanha.link} readOnly />
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
              <Text text="WhatsApp Adicionados" />
              <div className="flex flex-col gap-2 max-h-[300px] overflow-y-auto">
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
        <ButtonAction label="Salvar" onClick={handleSave} />
      </div>
    </div>
  );
}
