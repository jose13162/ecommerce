import { styled } from "../../stitches.config";

export const StyledContainer = styled("div", {
  width: "70%",
  margin: "0 auto",
  overflow: "hidden",
  display: "grid",
  "@tiny": {
    width: "100vw",
  },
  "@small": {
    width: "100vw",
  },
  "&.full-height": {
    height: "100vh",
  },
});
