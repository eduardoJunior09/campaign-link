import ButtonWppLink from "../ButtonWppLink";
import TextInputReadonly from "../TextInputReadonly";

export default function FoneAdd({ index, wpp, onRemove }) {
  return (
    <div className="flex gap-1 w-full">
      <TextInputReadonly key={index} value={wpp} readOnly />
      <ButtonWppLink
        label="remove"
        icon={<i className="bi bi-trash"></i>}
        onClick={() => onRemove(index)}
      />
    </div>
  );
}
