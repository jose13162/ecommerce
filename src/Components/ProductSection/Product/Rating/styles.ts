import { styled, theme } from "../../../../stitches.config";

export const StyledRating = styled("div", {
  margin: "0.75rem",
  color: theme.colors.$bgColorDarkest.value,
  textAlign: "center",
  span: {
    "&.checked": {
      color: "orange",
    },
  },
});