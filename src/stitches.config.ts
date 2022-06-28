import { createStitches } from "@stitches/react";

export const { styled, globalCss, theme, createTheme } = createStitches({
  theme: {
    colors: {
      $primary: "#8257e5",
      $primaryLighter: "#8f6ae6",
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
    small: "(max-width: 768px)",
    medium: "(max-width: 1024px)",
    large: "(max-width: 1200px)",
    infinite: "(mix-width: 1201px)",
  },
});

export const darkTheme = createTheme("dark-theme", {
  colors: {
    $bgColor: "#080808",
    $bgColorLighter: "#111111",
    $bgColorLightest: "#27272b",
    $bgColorSecondary: "#404852",
    $bgColorSecondaryDarker: "#425054",
    $textColor: "#bbb",
    $titleColor: "#ccc",
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
    $titleColor: "#444",
  },
});
