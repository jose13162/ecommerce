import { Navigation } from "../../Components/Navigation";
import { Categories } from "../../Components/Categories";
import { CustomContainer, HamburgerMenuModal, StyledHome, Wrapper } from "./styles";
import { ProductSection } from "../../Components/ProductSection";

export function Home() {
  return (
    <StyledHome>
      <Navigation />
      <CustomContainer>
        <Wrapper>
          <Categories id="sidebar" />
          <ProductSection />
        </Wrapper>
        <HamburgerMenuModal />
      </CustomContainer>
    </StyledHome>
  );
}
