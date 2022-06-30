import { ButtonHTMLAttributes } from "react";
import { styled, theme } from "../../stitches.config";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const StyledButton = styled("button", {
  padding: "0.75rem 2.5rem",
  border: "none",
  borderRadius: "0.25rem",
  background: theme.colors.$primary.value,
  color: theme.colors.$textColor.value,
  fontWeight: 400,
  cursor: "pointer",
  transition: theme.transitions.$baseTransition.value,
  "&[disabled]": {
    cursor: "inherit",
    background: theme.colors.$primaryLighter.value,
  },
});

export function Button({ text, ...rest }: IProps) {
  return <StyledButton {...rest}>{text}</StyledButton>;
}
