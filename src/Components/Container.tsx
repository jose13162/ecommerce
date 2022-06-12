import React from "react";
import { styled } from "../stitches.config";

const StyledContainer = styled("div", {
  width: "70%",
  height: "100vh",
  margin: "auto",
  overflow: "hidden",
  display: "grid",
  "@tiny": {
    width: "100vw",
  },
  "@small": {
    width: "100vw",
  },
});

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

export function Container(props: IProps) {
  return <StyledContainer>{props.children}</StyledContainer>;
}
