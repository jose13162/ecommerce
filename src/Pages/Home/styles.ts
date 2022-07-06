import { styled, theme } from "../../stitches.config";

export const StyledHome = styled("div", {
  width: "100vw",
  height: "100vh",
  overflowX: "hidden",
  display: "grid",
  gridTemplateRows: "max-content 1fr",
  background: theme.colors.$bgColor.value,
  "&::-webkit-scrollbar": {
    width: "0px",
  },
});