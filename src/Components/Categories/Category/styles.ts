import { styled } from "@stitches/react";
import { NavLink } from "react-router-dom";
import { theme } from "../../../stitches.config";

export const StyledCategory = styled(NavLink, {
  cursor: "pointer",
  background: theme.colors.$bgColor.value,
  borderRadius: "0.5rem",
  padding: "0.5rem 0.75rem",
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
