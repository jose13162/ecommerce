import { NavLink } from "react-router-dom";
import { styled, theme } from "../../stitches.config";

export const StyledLogo = styled(NavLink, {
  textDecoration: "none",
  color: theme.colors.$textColor.value,
});
