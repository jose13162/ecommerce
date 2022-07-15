import { createStitches } from "@stitches/react";

export const { styled, theme } = createStitches({
  theme: {
    colors: {
      $primary: "#8257e5",
      $primaryLighter: "#8f6ae6",
      $bgColor: "#fff",
      $bgColorDarker: "#eee",
      $bgColorDarkest: "#ddd",
      $bgColorSecondary: "#e9f5ff",
      $bgColorSecondaryDarker: "#e7f3fd",
      $textColorLight: "#eee",
      $textColor: "#555",
      $textColorDarker: "#333",
      $titleColor: "#444",
    },
    transitions: {
      $slowerTransition: "all 0.25s linear",
      $slowTransition: "all 0.20s linear",
      $baseTransition: "all 0.15s linear",
      $fastTransition: "all 0.10s linear",
    },
    shadows: {
      $thin: "0 1px 5px rgba(0, 0, 0, 0.1)",
      $base: "0 1px 5px rgba(0, 0, 0, 0.2)",
      $bold: "0 1px 5px rgba(0, 0, 0, 0.3)",
      $bolder: "0 1px 5px rgba(0, 0, 0, 0.4)",
      $boldest: "0 1px 5px rgba(0, 0, 0, 0.5)",
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
