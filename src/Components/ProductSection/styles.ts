import { styled } from "@stitches/react";

export const StyledProductSection = styled("section", {
  overflowY: "scroll",
  padding: "1.5rem",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
  gridAutoRows: "max-content",
  gap: "1.5rem",
  justifyContent: "center",
  "&::-webkit-scrollbar": {
    width: 0,
  },
});
