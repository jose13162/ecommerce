import { styled } from "@stitches/react";

export const StyledProductSection = styled("section", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
  gridAutoRows: "max-content",
  gap: "1.5rem",
  justifyContent: "center",
});
