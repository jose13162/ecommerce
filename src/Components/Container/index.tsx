import React from "react";
import { StyledContainer } from "./styles";

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
