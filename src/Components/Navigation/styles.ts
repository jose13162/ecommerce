import { styled, theme } from "../../stitches.config";

export const StyledNavigation = styled("nav", {
  boxShadow: theme.shadows.$base.value,
  color: theme.colors.$textColor.value,
  background: theme.colors.$bgColorDarker.value,
  zIndex: 1,
  "#hamburger-button": { display: "none" },
  "@tiny": {
    "#nav-items": {
      display: "none",
    },
    "#hamburger-button": {
      display: "inherit",
    },
  },
});

export const Wrapper = styled("div", {
  width: "100%",
  padding: "1.5rem",
  display: "grid",
  gridTemplateColumns: "max-content max-content",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "5rem",
  h1: {
    margin: 0,
  },
});

export const NavigationItems = styled("ul", {
  display: "grid",
  gridAutoColumns: "max-content",
  gridAutoFlow: "column",
  gap: "1rem",
});