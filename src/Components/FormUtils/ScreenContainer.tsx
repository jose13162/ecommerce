import { useStore } from "zustand";
import { darkTheme, lightTheme, styled } from "../../stitches.config";
import { themeStore } from "../../store/theme";

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

const StyledScreenContainer = styled("div", {
  "&.light-theme": {
    background: lightTheme.colors.$bgColor.value,
  },
  "&.dark-theme": {
    background: darkTheme.colors.$bgColorLighter.value,
  },
});

export default function ({ children }: IProps) {
  const { theme } = useStore(themeStore);

  return (
    <StyledScreenContainer className={theme}>{children}</StyledScreenContainer>
  );
}
