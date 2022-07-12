import { styled } from "@stitches/react";
import { NavLink } from "react-router-dom";
import { SidebarItem } from "../../Components/SidebarItem";
import { theme } from "../../stitches.config";

export const StyledAccount = styled("div", {
  width: "100vw",
  height: "100vh",
  display: "grid",
  gridTemplateRows: "max-content 1fr",
});

export const Wrapper = styled("div", {
  width: "100%",
  height: "100%",
  display: "grid",
  gridTemplateColumns: "12rem 1fr",
  gridTemplateRows: "1fr",
  gap: "1.5rem",
  padding: "1.5rem",
});

export const Card = styled("div", {
  width: "100%",
  height: "100%",
  boxShadow: theme.shadows.$bold.value,
});

export const Sidebar = styled("nav", {
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
