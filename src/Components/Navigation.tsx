import { useStore } from "zustand";
import { darkTheme, lightTheme, styled, theme } from "../stitches.config";
import { themeStore } from "../store/theme";
import { Container } from "./Container";
import {
  faUser,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { NavigationItem } from "./NavigationItem";

const StyledNavigation = styled("nav", {
  "&.light-theme": {
    boxShadow: theme.shadows.$base.value,
    color: lightTheme.colors.$textColor.value,
    background: lightTheme.colors.$bgColorDarker.value,
    ".title": {
      color: lightTheme.colors.$textColor.value,
    },
  },
  "&.dark-theme": {
    boxShadow: theme.shadows.$bold.value,
    color: darkTheme.colors.$textColor.value,
    background: darkTheme.colors.$bgColor.value,
    ".title": {
      color: darkTheme.colors.$textColor.value,
    },
  },
  ".hamburger-button": { display: "none" },
  ".title": { textDecoration: "none" },
  "@large": {
    ".nav-item-wrapper": {
      gridTemplateColumns: "2.5rem",
      svg: {
        width: "80%",
        height: "80%",
      },
      ".label": {
        display: "none",
      },
    },
  },
  "@small": {
    ".nav-item-wrapper": {
      display: "none",
    },
    ".hamburger-button": {
      display: "inherit",
      svg: {
        width: "80%",
        height: "80%",
      },
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
          <a href="/" className="title">
            <h1>Ecommerce</h1>
          </a>
          <NavItems>
            <li className="nav-item-wrapper">
              <NavigationItem
                className={theme}
                href="/account"
                icon={faUser}
                label="Meu perfil"
              />
            </li>
            <li className="nav-item-wrapper">
              <NavigationItem
                className={theme}
                href="/cart"
                icon={faCartShopping}
                label="Carrinho"
              />
            </li>
            <li className="hamburger-button">
              <NavigationItem className={theme} icon={faBars} />
            </li>
          </NavItems>
        </Wrapper>
      </Container>
    </StyledNavigation>
  );
}
