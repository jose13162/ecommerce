import { styled, theme } from "../../stitches.config";

export const StyledCategories = styled("nav", {
  height: "100%",
});

export const CategoriesList = styled("ul", {
  borderRadius: "0.5rem",
  background: theme.colors.$bgColorDarker.value,
  boxShadow: theme.shadows.$bold.value,
  padding: "0.5rem",
  display: "grid",
  gridAutoRows: "max-content",
  gap: "0.5rem",
});
