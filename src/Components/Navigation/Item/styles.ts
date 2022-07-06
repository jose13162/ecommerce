import { NavLink } from "react-router-dom";
import { styled, theme } from "../../../stitches.config";

export const StyledNavigationItem = styled(NavLink, {
  height: "2.5rem",
  borderRadius: "50%",
  color: theme.colors.$primary.value,
  textDecoration: "none",
  cursor: "pointer",
  display: "grid",
  gridTemplateColumns: "2.5rem max-content",
  gap: "0.25rem",
  placeItems: "center",
  placeContent: "center",
  transition: theme.transitions.$baseTransition.value,
  svg: {
    width: "60%",
    height: "60%",
  },
  "&:hover": {
    color: theme.colors.$primaryLighter.value,
  },
  ".label": {
    color: theme.colors.$textColor.value,
  },
  "@small": {
    ".label": {
      display: "none",
    },
    svg: {
      width: "75%",
      height: "75%",
    },
  },
});
