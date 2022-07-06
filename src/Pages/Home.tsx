import { useStore } from "zustand";
import { Container } from "../Components/Container";
import { Navigation } from "../Components/Navigation";
import { darkTheme, lightTheme, styled } from "../stitches.config";
import { themeStore } from "../store/theme";

const StyledHome = styled("div", {
  width: "100vw",
  height: "100vh",
  overflowX: "hidden",
  display: "grid",
  gridTemplateRows: "max-content 1fr",
  "&.light-theme": {
    background: lightTheme.colors.$bgColor.value,
  },
  "&.dark-theme": {
    background: darkTheme.colors.$bgColorLighter.value,
  },
  "&::-webkit-scrollbar": {
    width: "0px",
  },
});

export function Home() {
  const { theme } = useStore(themeStore);

  return (
    <StyledHome className={theme}>
      <Navigation />
      <Container>
        <p>product list</p>
      </Container>
    </StyledHome>
  );
}
