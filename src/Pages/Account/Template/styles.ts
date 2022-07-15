import { styled } from "@stitches/react";
import { theme } from "../../../stitches.config";

export const StyledTemplate = styled("div", {
  width: "100vw",
  height: "100vh",
  display: "grid",
  gridTemplateRows: "max-content 1fr",
});

export const Wrapper = styled("div", {
  width: "100%",
  height: "100%",
  display: "grid",
  gridTemplateColumns: "12rem 1fr",
  gridTemplateRows: "1fr",
  gap: "1.5rem",
  padding: "1.5rem",
});

export const Card = styled("div", {
  width: "100%",
  height: "100%",
  boxShadow: theme.shadows.$bold.value,
});

