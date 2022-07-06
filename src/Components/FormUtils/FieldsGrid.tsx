import { styled } from "@stitches/react";
import { BaseHTMLAttributes } from "react";

const FieldsGrid = styled("div", {
  display: "grid",
  width: "100%",
  gridTemplateColumns: "1fr",
  gridAutoRows: "max-content",
  gap: "0.5rem",
});

interface IProps extends BaseHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[];
}

export default function({ children, ...rest }: IProps) {
  return <FieldsGrid {...rest}>{children}</FieldsGrid>;
}
