import { useStore } from "zustand";
import { Navigation } from "./Components/Navigation";
import { darkTheme, lightTheme, styled } from "./stitches.config";
import { themeStore } from "./store/theme";

const StyledApp = styled("div", {
  width: "100vw",
  height: "100vh",
  "&.light-theme": {
    background: lightTheme.colors.$bgColor.value,
  },
  "&.dark-theme": {
    background: darkTheme.colors.$bgColorLighter.value,
  },
});

function App() {
  const { theme } = useStore(themeStore);

  return (
    <StyledApp className={theme}>
      <Navigation />
    </StyledApp>
  );
}

export default App;
