import { styled, theme } from "../../stitches.config";

export const StyledCategories = styled("nav", {
  position: "relative",
  height: "100%",
});

export const CategoriesList = styled("ul", {
  position: "absolute",
  inset: "1.5rem 0 1.5rem 1.5rem",
  borderRadius: "0.5rem",
  background: theme.colors.$bgColorDarker.value,
  boxShadow: theme.shadows.$bold.value,
  padding: "0.5rem",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    width: 0,
  },
  display: "grid",
  gridAutoRows: "max-content",
  gap: "0.5rem",
});
