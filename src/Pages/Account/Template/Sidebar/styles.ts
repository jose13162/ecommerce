import { NavLink } from "react-router-dom";
import { SidebarItem } from "../../../../Components/SidebarItem";
import { styled, theme } from "../../../../stitches.config";

export const StyledSidebar = styled("nav", {
  height: "100%",
  width: "100%",
  background: theme.colors.$bgColorDarker.value,
  padding: "0.5rem",
  borderRadius: "0.5rem",
  boxShadow: theme.shadows.$bold.value,
});

export const SidebarItems = styled("ul", {
  display: "grid",
  gridAutoRows: "max-content",
  gap: "0.5rem",
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

export const CustomSidebarItem = styled(SidebarItem, {
  "&:hover": {
    a: {
      color: theme.colors.$primary.value,
    },
  },
});
