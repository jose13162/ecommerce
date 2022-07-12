import { NavLink } from "react-router-dom";
import { styled, theme } from "../../../stitches.config";
import { SidebarItem } from "../../SidebarItem";

export const CustomSidebarItem = styled(SidebarItem, {
  "&:hover": {
    a: {
      color: theme.colors.$primary.value,
    },
  },
});

export const StyledNavLink = styled(NavLink, {
  width: "100%",
  height: "100%",
  padding: "0.5rem",
  display: "inline",
  textDecoration: "none",
  textTransform: "capitalize",
  fontWeight: 500,
  color: theme.colors.$textColorDarker.value,
  transition: theme.transitions.$baseTransition.value,
});
