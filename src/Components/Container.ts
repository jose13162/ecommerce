import { styled } from "../stitches.config";

export const Container = styled("div", {
  height: "100%",
  overflow: "hidden",
  position: "relative",
  display: "grid",
  gridTemplateColumns: "70%",
  justifyItems: "center",
  justifyContent: "center",
  "@tiny": {
    width: "100vw",
  },
  "@small": {
    width: "100vw",
  },
});
