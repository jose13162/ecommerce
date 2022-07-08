import { Container } from "../../Components/Container";
import { Navigation } from "../../Components/Navigation";
import { StyledHome } from "./styles";

export function Home() {
  return (
    <StyledHome>
      <Navigation />
      <Container>
        <p>product list</p>
        <div
          id="hamburger-menu-modal"
          style={{
            position: "absolute",
            pointerEvents: "none",
            width: "100%",
            height: "100%",
            display: "grid",
            gridTemplateColumns: "1fr",
            gridTemplateRows: "1fr",
          }}
        ></div>
      </Container>
    </StyledHome>
  );
}
