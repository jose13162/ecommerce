import { styled, theme } from "../../../stitches.config";

export const StyledProfile = styled("div", {
  padding: "0.5rem",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridAutoRows: "max-content",
  gap: "2rem",
  h2: {
    color: theme.colors.$titleColor.value,
  },
});
