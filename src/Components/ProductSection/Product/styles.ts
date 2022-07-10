import { styled, theme } from "../../../stitches.config";

export const Cover = styled("img", {
  objectFit: "cover",
  borderRadius: "0.5rem 0.5rem 0 0",
});

export const Price = styled("p", {
  width: "max-content",
  fontWeight: 600,
  fontSize: "1.25rem",
  color: theme.colors.$primary.value,
});

export const Title = styled("h3", {
  width: "100%",
  fontWeight: 600,
  textTransform: "uppercase",
  fontSize: "1rem",
  color: theme.colors.$textColorDarker.value,
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
});

export const Category = styled("p", {
  textTransform: "uppercase",
  fontWeight: 600,
  fontSize: "0.75rem",
  opacity: 0.7,
});

export const Details = styled("div", {
  padding: "0 0.75rem",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridAutoRows: "max-content",
  gap: "0.25rem",
  justifyItems: "center",
});

export const StyledProduct = styled("div", {
  width: "100%",
  boxShadow: theme.shadows.$bold.value,
  color: theme.colors.$textColorDarker.value,
  borderRadius: "0.5rem",
  display: "grid",
  gap: "0.25rem",
  justifyItems: "center",
});
