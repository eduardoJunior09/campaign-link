import { useParams } from "react-router-dom";
import ButtonWppLink from "../Components/ButtonWppLink";
import ShowDiv from "../Components/ShowDiv";
import Text from "../Components/Text";
import TextSpan from "../Components/TextSpan";
import TextInputReadonly from "../Components/TextInputReadonly";
import CampanhaData from "../data/db.json";
import toast from "react-hot-toast";

export default function ViewCampaign() {
  const { id } = useParams();

  console.log(id);

  const campanha = CampanhaData.campanhas.find(
    (item) => item.id === Number(id)
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(campanha.link);
      toast.success("Copiado para a área de transferência!");
    } catch (err) {
      console.error("Erro ao copiar o link: ", err);
    }
  };

  return (
    <div className="w-full max-w-[1350px]">
      <div className="flex flex-col items-start justify-center gap-1 w-full p-3 ">
        <p className="font-semibold text-2xl text-gray-700">{campanha.nome}</p>
        <hr className="w-full border-gray-700" />
      </div>
      <div className="flex flex-col gap-3 w-full p-3">
        <ShowDiv>
          <TextSpan label="Responsável" />
          <TextInputReadonly value={campanha.responsavel} readOnly />
        </ShowDiv>

        <div className="flex flex-col gap-3 w-full">
          <ShowDiv>
            <TextSpan label="Link" />
            <Text text="O link da campanha está disponível abaixo." />
          </ShowDiv>
          <div className="flex items-center justify-center gap-1 w-full">
            <TextInputReadonly value={campanha.link} readOnly />
            <ButtonWppLink
              label="copy"
              icon={<i className="bi bi-copy"></i>}
              onClick={handleCopy}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <ShowDiv>
            <TextSpan label="WhatsApp Link" />
            <div className=" flex items-start justify-start flex-col gap-1 w-full border border-gray-300 rounded p-2 ">
              <Text text="WhatsApp Adicionados" />
              <div className="flex flex-col h-auto max-h-[300px] overflow-y-auto gap-2 w-full">
                {campanha.whatsapps.map((wpp, index) => (
                  <TextInputReadonly key={index} value={wpp} readOnly />
                ))}
              </div>
            </div>
          </ShowDiv>
        </div>
      </div>
    </div>
  );
}
