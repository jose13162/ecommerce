import { BaseHTMLAttributes } from "react";
import { useStore } from "zustand";
import { darkTheme, lightTheme, styled } from "../stitches.config";
import { themeStore } from "../store/theme";

interface IProps extends BaseHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[];
}

const StyledFormScreenContainer = styled("div", {
  "&.light-theme": {
    background: lightTheme.colors.$bgColor.value,
  },
  "&.dark-theme": {
    background: darkTheme.colors.$bgColorLighter.value,
  },
});

export function FormScreenContainer({ children, ...rest }: IProps) {
  const { theme } = useStore(themeStore);

  return (
    <StyledFormScreenContainer {...rest} className={theme}>
      {children}
    </StyledFormScreenContainer>
  );
}
