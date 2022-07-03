import { NavLink } from "react-router-dom";
import { useStore } from "zustand";
import { darkTheme, lightTheme, styled } from "../stitches.config";
import { themeStore } from "../store/theme";

const StyledLogo = styled(NavLink, {
  textDecoration: "none",
  "&.light-theme": {
    color: lightTheme.colors.$textColor.value,
  },
  "&.dark-theme": {
    color: darkTheme.colors.$textColor.value,
  },
});

export function Logo() {
  const { theme } = useStore(themeStore);

  return (
    <StyledLogo to="/" className={theme}>
      <h1>Ecommerce</h1>
    </StyledLogo>
  );
}
