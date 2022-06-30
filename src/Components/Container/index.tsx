import React from "react";
import { styled } from "../../stitches.config";

const StyledContainer = styled("div", {
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

interface IProps {
  children: React.ReactNode | React.ReactNode[];
  fullHeight?: boolean;
}

export function Container(props: IProps) {
  return (
    <StyledContainer className={props.fullHeight ? "full-height" : ""}>
      {props.children}
    </StyledContainer>
  );
}
