import { NavLink } from "react-router-dom";
import { styled, theme } from "../../stitches.config";

export const ScreenContainer = styled("div", {
  width: "100vw",
  height: "100vh",
  background: theme.colors.$bgColor.value,
});

export const Base = styled("form", {
  width: "100%",
});

export const Container = styled("div", {
  width: "70%",
  minWidth: "16rem",
  maxWidth: "28rem",
  borderRadius: "1rem",
  padding: "2rem",
  margin: "1rem",
  boxShadow: theme.shadows.$bold.value,
  background: theme.colors.$bgColorDarker.value,
  h1: {
    color: theme.colors.$titleColor.value,
  },
  display: "grid",
  gap: "2rem",
  placeItems: "center",
  placeSelf: "center",
});

export const FieldsGrid = styled("div", {
  display: "grid",
  width: "100%",
  gridTemplateColumns: "1fr",
  gridAutoRows: "max-content",
  gap: "0.5rem",
});

export const Grid = styled("div", {
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "max-content max-content",
  gap: "3rem",
  justifyItems: "center",
});

export const Link = styled(NavLink, {
  width: "max-content",
  color: theme.colors.$primary.value,
  textDecoration: "none",
  transition: theme.transitions.$baseTransition.value,
  "&:hover": {
    color: theme.colors.$primaryLighter.value,
  },
});
