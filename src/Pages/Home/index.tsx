import { Navigation } from "../../Components/Navigation";
import { Container } from "../../Components/Container";
import { Categories } from "../../Components/Categories";
import { HamburgerMenuModal, StyledHome, Wrapper } from "./styles";
import { ProductSection } from "../../Components/ProductSection";

export function Home() {
  return (
    <StyledHome>
      <Navigation />
      <Container>
        <Wrapper>
          <Categories />
          <ProductSection />
        </Wrapper>
        <HamburgerMenuModal />
      </Container>
    </StyledHome>
  );
}
