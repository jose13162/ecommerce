import { FormHTMLAttributes } from "react";
import { styled } from "../stitches.config";

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode | React.ReactNode[];
}

const FormGridLayout = styled("form", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "max-content max-content",
  gap: "3rem",
  justifyItems: "center",
});

export function FormGrid({ children, ...rest }: IProps) {
  return <FormGridLayout {...rest}>{children}</FormGridLayout>;
}
