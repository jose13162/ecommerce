import { createStitches } from "@stitches/react";

export const { styled, globalCss } = createStitches({
  media: {
    tiny: "(max-width: 480px)",
    small: "(min-width: 481px) and (max-width: 768px)",
    medium: "(min-width: 769px) and (max-width: 1024px)",
    large: "(min-width: 1025px) and (max-width: 1200px)",
    infinite: "(min-width: 1201px)",
  },
});
