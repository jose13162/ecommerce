import { Container } from "../Container";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavigationItem } from "./Item";
import { Logo } from "../Logo";
import { NavigationItems, StyledNavigation, Wrapper } from "./styles";
import HamburgerButton from "./HamburgerButton";
import { Portal } from "../Portal";
import { HamburgerMenu } from "./HamburgerMenu";
import { createRef } from "react";

export function Navigation() {
  const hamburgerMenuReference = createRef<HTMLBaseElement>();

  function toggleHamburgerMenu() {
    hamburgerMenuReference.current?.classList.toggle("active");
  }

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
          <HamburgerButton
            id="hamburger-button"
            onClick={toggleHamburgerMenu}
          />
        </Wrapper>
        <Portal tag="div" selector="#hamburger-menu-modal">
          <HamburgerMenu ref={hamburgerMenuReference} />
        </Portal>
      </Container>
    </StyledNavigation>
  );
}
