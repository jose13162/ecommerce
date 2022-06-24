import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStore } from "zustand";
import { darkTheme, lightTheme, styled, theme } from "../stitches.config";
import { themeStore } from "../store/theme";
import { Container } from "./Container";
import {
  faUser,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

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
});

const Wrapper = styled("div", {
  padding: "1.5rem 1.5rem",
  display: "grid",
  gridTemplateColumns: "max-content max-content",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "4rem",
  h1: {
    margin: 0,
  },
  "#hamburger-button": {
    display: "none",
    pointerEvents: "none",
  },
  "@small": {
    ".hideable-nav-item": {
      display: "none",
      pointerEvents: "none",
    },
    "#hamburger-button": {
      display: "grid",
      pointerEvents: "auto",
    },
  },
  "@tiny": {
    ".hideable-nav-item": {
      display: "none",
      pointerEvents: "none",
    },
    "#hamburger-button": {
      display: "grid",
      pointerEvents: "auto",
    },
  },
});

const NavItems = styled("ul", {
  listStyle: "none",
  display: "grid",
  gridAutoColumns: "max-content",
  gridAutoFlow: "column",
  gap: "1rem",
});

const NavItem = styled("li", {
  width: "2.5rem",
  height: "2.5rem",
  borderRadius: "50%",
  display: "grid",
  placeItems: "center",
  placeContent: "center",
  transition: theme.transitions.$baseTransition.value,
  svg: {
    width: "75%",
    height: "75%",
  },
  a: {
    height: "100%",
    display: "grid",
    placeItems: "center",
    color: theme.colors.$primary.value,
    transition: theme.transitions.$baseTransition.value,
  },
  "&:hover": {
    a: {
      color: theme.colors.$primaryLighter.value,
    },
  },
  "&.dark-theme": {
    "&:hover": {
      background: darkTheme.colors.$bgColorLightest.value,
    },
  },
  "&.light-theme": {
    "&:hover": {
      background: lightTheme.colors.$bgColorDarkest.value,
    },
  },
});

export function Navigation() {
  const { theme } = useStore(themeStore);

  return (
    <StyledNavigation className={theme}>
      <Container>
        <Wrapper>
          <h1>Ecommerce</h1>
          <NavItems>
            <NavItem className={`${theme} hideable-nav-item`}>
              <a href="/account">
                <FontAwesomeIcon icon={faUser} />
              </a>
            </NavItem>
            <NavItem className={`${theme} hideable-nav-item`}>
              <a href="/cart">
                <FontAwesomeIcon icon={faCartShopping} />
              </a>
            </NavItem>
            <NavItem className={theme} id="hamburger-button">
              <a href="/cart">
                <FontAwesomeIcon icon={faBars} />
              </a>
            </NavItem>
          </NavItems>
        </Wrapper>
      </Container>
    </StyledNavigation>
  );
}
