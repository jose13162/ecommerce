import { FormHTMLAttributes } from "react";
import { styled } from "../../stitches.config";

interface IProps extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode | React.ReactNode[];
}

const StyledForm = styled("form", {
  width: "100%",
});

export default function ({ children, ...rest }: IProps) {
  return <StyledForm {...rest}>{children}</StyledForm>;
}