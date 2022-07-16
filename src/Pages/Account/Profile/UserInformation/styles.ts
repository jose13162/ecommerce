import { NavLink } from "react-router-dom";
import { styled, theme } from "../../../../stitches.config";

export const StyledUserInformation = styled("div", {
  display: "grid",
  gridTemplateColumns: "8rem 1fr",
  gridTemplateRows: "max-content max-content",
  gridTemplateAreas: `"user-avatar user-data" "buttons user-data"`,
  gap: "1rem 2rem",
});

export const Wrapper = styled("div", {
  maxWidth: "36rem",
  gridArea: "user-data",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridAutoRows: "max-content",
  gap: "0.75rem",
});

export const Avatar = styled("img", {
  gridArea: "user-avatar",
  width: "100%",
  aspectRatio: "1 / 1",
  objectFit: "cover",
  borderRadius: "50%",
  border: `2px solid ${theme.colors.$primary.value}`,
  padding: "0.125rem",
});

export const Buttons = styled("div", {
  gridArea: "buttons",
  width: "max-content",
  display: "grid",
  gridTemplateRows: "max-content max-content",
  gap: "1rem",
});

export const StyledNavLink = styled(NavLink, {
  background: theme.colors.$primary.value,
  color: theme.colors.$textColorLight.value,
  padding: "0.25rem 1rem",
  borderRadius: "0.25rem",
  textDecoration: "none",
  textAlign: "center",
  transition: theme.transitions.$baseTransition.value,
  "&:hover": {
    background: theme.colors.$primaryLighter.value,
  },
});
