import { styled, theme } from "../../../stitches.config";

export const StyledHamburgerButton = styled("button", {
  width: "2.5rem",
  height: "2.5rem",
  borderRadius: "50%",
  color: theme.colors.$primary.value,
  cursor: "pointer",
  display: "grid",
  placeItems: "center",
  transition: theme.transitions.$baseTransition.value,
  svg: {
    width: "80%",
    height: "80%",
  },
  "&:hover": {
    color: theme.colors.$primaryLighter.value,
  },
});