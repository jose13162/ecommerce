import { styled, theme } from "../stitches.config";

export const Input = styled("input", {
  width: "100%",
  borderRadius: "0.45rem",
  padding: "0.75rem",
  outline: "none",
  boxSizing: "border-box",
  overflow: "hidden",
  transition: theme.transitions.$fastTransition.value,
  border: `2px solid ${theme.colors.$bgColor.value}`,
  background: theme.colors.$bgColor.value,
  caretColor: theme.colors.$textColor.value,
  color: theme.colors.$textColor.value,
  "&[disabled]": {
    border: `2px solid ${theme.colors.$bgColorDarkest.value}`,
    background: theme.colors.$bgColorDarkest.value,
  },
  "&:focus": {
    border: `2px solid ${theme.colors.$primary.value}`,
  },
});
