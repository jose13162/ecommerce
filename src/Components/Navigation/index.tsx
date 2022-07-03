import { useStore } from "zustand";
import { darkTheme, lightTheme, styled, theme } from "../../stitches.config";
import { themeStore } from "../../store/theme";
import { Container } from "../Container";
import {
  faUser,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { NavigationItem } from "./Item";
import { Logo } from "../Logo";
import { HamburgerButton } from "./HamburgerButton";

const StyledNavigation = styled("nav", {
  "&.light-theme": {
    boxShadow: theme.shadows.$base.value,
    color: lightTheme.colors.$textColor.value,
    background: lightTheme.colors.$bgColorDarker.value,
  },
  "&.dark-theme": {
    boxShadow: theme.shadows.$bold.value,
    color: darkTheme.colors.$textColor.value,
    background: darkTheme.colors.$bgColor.value,
  },
  ".hamburger-button": { display: "none" },
  "@tiny": {
    ".nav-items": {
      display: "none",
    },
    ".hamburger-button": {
      display: "inherit",
    },
  },
});

const Wrapper = styled("div", {
  padding: "1.5rem 1.5rem",
  display: "grid",
  gridTemplateColumns: "max-content max-content",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "5rem",
  h1: {
    margin: 0,
  },
});

const NavItems = styled("ul", {
  listStyle: "none",
  display: "grid",
  gridAutoColumns: "max-content",
  gridAutoFlow: "column",
  gap: "1rem",
});

export function Navigation() {
  const { theme } = useStore(themeStore);

  return (
    <StyledNavigation className={theme}>
      <Container>
        <Wrapper>
          <Logo />
          <NavItems className="nav-items">
            <NavigationItem
              to="/account"
              className="nav-item"
              icon={faUser}
              label="Meu perfil"
            />
            <NavigationItem
              to="/cart"
              className="nav-item"
              icon={faCartShopping}
              label="Carrinho"
            />
          </NavItems>
          <HamburgerButton className="hamburger-button" />
        </Wrapper>
      </Container>
    </StyledNavigation>
  );
}
