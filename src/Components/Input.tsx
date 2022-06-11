import { InputHTMLAttributes } from "react";
import { useStore } from "zustand";
import { darkTheme, lightTheme, styled, theme } from "../stitches.config";
import { themeStore } from "../store/theme";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const StyledInput = styled("input", {
  width: "100%",
  borderRadius: "0.45rem",
  padding: "0.75rem",
  outline: "none",
  boxSizing: "border-box",
  overflow: "hidden",
  transition: theme.transitions.$fastTransition.value,
  "&.light-theme": {
    border: `2px solid ${lightTheme.colors.$bgColor.value}`,
    background: lightTheme.colors.$bgColor.value,
    caretColor: lightTheme.colors.$textColor.value,
    color: lightTheme.colors.$textColor.value,
  },
  "&.dark-theme": {
    border: `2px solid ${darkTheme.colors.$bgColor.value}`,
    background: darkTheme.colors.$bgColorDarkest.value,
    caretColor: darkTheme.colors.$textColor.value,
    color: darkTheme.colors.$textColor.value,
  },
  "&:focus": {
    border: `2px solid ${theme.colors.$primary.value}`,
  },
});

export function Input(props: IProps) {
  const { theme } = useStore(themeStore);

  return <StyledInput {...props} className={theme} />;
}
