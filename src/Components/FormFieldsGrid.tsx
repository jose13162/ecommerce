import { styled } from "@stitches/react";
import { BaseHTMLAttributes } from "react";

const FormFieldsGridLayout = styled("div", {
  display: "grid",
  width: "100%",
  gridTemplateColumns: "1fr",
  gridAutoRows: "max-content",
  gap: "0.5rem",
});

interface IProps extends BaseHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[];
}

export function FormFieldsGrid({ children, ...rest }: IProps) {
  return <FormFieldsGridLayout {...rest}>{children}</FormFieldsGridLayout>;
}
