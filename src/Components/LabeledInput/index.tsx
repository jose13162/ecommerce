import { InputHTMLAttributes } from "react";
import { Input } from "../Input";
import { StyledLabeledInput } from "./styles";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  htmlFor: string;
}

export function LabeledInput({ label, htmlFor, ...rest }: IProps) {
  return (
    <StyledLabeledInput>
      <label htmlFor={htmlFor}>{label}</label>
      <Input {...rest} />
    </StyledLabeledInput>
  );
}
