import { styled } from "../../stitches.config";

export const StyledContainer = styled("div", {
  width: "70%",
  height: "100%",
  margin: "0 auto",
  overflow: "hidden",
  position: "relative",
  display: "grid",
  "@tiny": {
    width: "100vw",
  },
  "@small": {
    width: "100vw",
  },
});
