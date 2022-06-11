import { createStitches } from "@stitches/react";

export const { styled, globalCss, theme, createTheme } = createStitches({
  theme: {
    colors: {
      $primary: "#8257e5",
      $textColor: "#eee",
    },
    transitions: {
      $baseTransition: "all 0.15s linear",
      $fastTransition: "all 0.10s linear",
    },
    shadows: {
      $base: "0 2px 5px rgba(0, 0, 0, 0.1)",
      $bold: "0 2px 5px rgba(0, 0, 0, 0.3)",
      $bolder: "0 2px 5px rgba(0, 0, 0, 0.5)",
    },
  },
  media: {
    tiny: "(max-width: 480px)",
    small: "(min-width: 481px) and (max-width: 768px)",
    medium: "(min-width: 769px) and (max-width: 1024px)",
    large: "(min-width: 1025px) and (max-width: 1200px)",
    infinite: "(min-width: 1201px)",
  },
});

export const darkTheme = createTheme("dark-theme", {
  colors: {
    $bgColor: "#27272b",
    $bgColorDarker: "#080808",
    $bgColorDarkest: "#111111",
    $bgColorSecondary: "#404852",
    $bgColorSecondaryDarker: "#425054",
    $textColor: "#bbb",
  },
});

export const lightTheme = createTheme("light-theme", {
  colors: {
    $bgColor: "#fff",
    $bgColorDarker: "#eee",
    $bgColorDarkest: "#ddd",
    $bgColorSecondary: "#e9f5ff",
    $bgColorSecondaryDarker: "#e7f3fd",
    $textColor: "#555",
  },
});
