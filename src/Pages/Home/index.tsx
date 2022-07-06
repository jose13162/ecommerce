import { Container } from "../../Components/Container";
import { Navigation } from "../../Components/Navigation";
import { StyledHome } from "./styles";

export function Home() {
  return (
    <StyledHome>
      <Navigation />
      <Container>
        <p>product list</p>
      </Container>
    </StyledHome>
  );
}
