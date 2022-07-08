import { styled, theme } from "../../../stitches.config";

export const StyledHamburgerMenu = styled("nav", {
  pointerEvents: "auto",
  width: "max-content",
  padding: "1rem",
  float: "right",
  background: theme.colors.$bgColorDarkest.value,
  transform: "translateX(100%)",
  transition: theme.transitions.$slowTransition.value,
  "&.active": {
    "@tiny": {
      transform: "translateX(0)",
    },
  },
  borderRadius: "0 0 0 0.5rem"
});

export const HamburgerMenuItems = styled("ul", {
  display: "grid",
  gridTemplateColumns: "12rem",
  gap: "0.5rem",
});

export const HamburgerMenuItem = styled("li", {
  width: "100%",
  background: theme.colors.$bgColorDarker.value,
  borderRadius: "0.5rem",
  boxShadow: theme.shadows.$base.value,
  transition: theme.transitions.$baseTransition.value,
  opacity: 0.85,
  "&:hover": {
    opacity: 1,
  },
  a: {
    color: theme.colors.$primary.value,
    textDecoration: "none",
    display: "block",
    padding: "0.75rem",
    width: "100%",
    height: "100%",
  },
});
