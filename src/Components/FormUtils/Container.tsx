import React, { BaseHTMLAttributes } from "react";
import { useStore } from "zustand";
import { darkTheme, lightTheme, styled, theme } from "../../stitches.config";
import { themeStore } from "../../store/theme";

interface IProps extends BaseHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode | React.ReactNode[];
}

const StyledContainer = styled("div", {
  width: "70%",
  minWidth: "16rem",
  maxWidth: "28rem",
  borderRadius: "1rem",
  padding: "2rem",
  margin: "1rem",
  display: "grid",
  gap: "2rem",
  placeItems: "center",
  placeSelf: "center",
  "&.light-theme": {
    boxShadow: theme.shadows.$bold.value,
    background: lightTheme.colors.$bgColorDarker.value,
    h1: {
      color: lightTheme.colors.$titleColor.value,
    },
  },
  "&.dark-theme": {
    boxShadow: theme.shadows.$bolder.value,
    background: darkTheme.colors.$bgColorLightest.value,
    h1: {
      color: darkTheme.colors.$titleColor.value,
    },
  },
});

export default function(props: IProps) {
  const { theme } = useStore(themeStore);

  return <StyledContainer className={theme}>{props.children}</StyledContainer>;
}
