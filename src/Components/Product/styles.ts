import { styled, theme } from "../../stitches.config";

export const Cover = styled("img", {
  aspectRatio: "1 / 1",
  objectFit: "cover",
});

export const Details = styled("div", {
  padding: "0.75rem",
  display: "grid",
  gridTemplateRows: "max-content max-content",
  gap: "0.25rem",
});

export const Price = styled("p", {
  width: "max-content",
  fontWeight: 600,
  fontSize: "1.25rem",
});

export const Title = styled("h3", {
  width: "max-content",
  fontWeight: 500,
});

export const StyledProduct = styled("div", {
  width: "100%",
  height: "12rem",
  textDecoration: "none",
  display: "grid",
  gridTemplateColumns: "12rem 1fr",
  boxShadow: theme.shadows.$bold.value,
  color: theme.colors.$textColorDarker.value,
  "@small": {
    height: "10rem",
    gridTemplateColumns: "10rem 1fr",
  },
  "@tiny": {
    height: "8rem",
    gridTemplateColumns: "8rem 1fr",
  },
});
