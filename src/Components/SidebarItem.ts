import { styled, theme } from "../stitches.config";

export const SidebarItem = styled("li", {
  cursor: "pointer",
  background: theme.colors.$bgColor.value,
  borderRadius: "0.5rem",
  textDecoration: "none",
  textTransform: "capitalize",
  fontWeight: 500,
  color: theme.colors.$textColorDarker.value,
  transition: theme.transitions.$baseTransition.value,
  display: "grid",
  gridTemplateColumns: "1fr",
  "&:hover": {
    color: theme.colors.$primary.value,
  },
});
