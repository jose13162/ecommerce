import { Container } from "../Container";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavigationItem } from "./Item";
import { Logo } from "../Logo";
import { NavigationItems, StyledNavigation, Wrapper } from "./styles";
import HamburgerButton from "./HamburgerButton";

export function Navigation() {
  return (
    <StyledNavigation>
      <Container>
        <Wrapper>
          <Logo />
          <NavigationItems id="nav-items">
            <NavigationItem
              to="/account"
              className="nav-item"
              icon={faUser}
              label="Meu perfil"
            />
            <NavigationItem
              to="/cart"
              className="nav-item"
              icon={faCartShopping}
              label="Carrinho"
            />
          </NavigationItems>
          <HamburgerButton id="hamburger-button" />
        </Wrapper>
      </Container>
    </StyledNavigation>
  );
}
