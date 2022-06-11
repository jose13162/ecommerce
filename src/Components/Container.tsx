import React from "react";
import { styled } from "../stitches.config";

const StyledContainer = styled("div", {
  height: "100vh",
  width: "70%",
  margin: "auto",
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
