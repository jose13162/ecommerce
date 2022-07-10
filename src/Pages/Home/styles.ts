import { styled, theme } from "../../stitches.config";

export const StyledHome = styled("div", {
  width: "100vw",
  height: "100vh",
  overflowX: "hidden",
  display: "grid",
  gridTemplateRows: "max-content 1fr",
  background: theme.colors.$bgColor.value,
});

export const HamburgerMenuModal = styled("div", {
  position: "absolute",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  display: "grid",
  gridTemplateColumns: "1fr",
  gridTemplateRows: "1fr",
});

export const Wrapper = styled("div", {
  width: "100%",
  height: "100%",
  overflowY: "scroll",
  display: "grid",
  gridTemplateColumns: "15rem 1fr",
  "&::-webkit-scrollbar": {
    width: "0px",
  },
});
