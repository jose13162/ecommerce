import { Container } from "../../Components/Container";
import { Navigation } from "../../Components/Navigation";
import {
  Card,
  Sidebar,
  SidebarItems,
  StyledAccount,
  Wrapper,
  StyledNavLink,
  CustomSidebarItem,
} from "./styles";

export function Account() {
  return (
    <StyledAccount>
      <Navigation />
      <Container>
        <Wrapper>
          <Sidebar>
            <SidebarItems>
              <CustomSidebarItem>
                <StyledNavLink to="/account">Minha conta</StyledNavLink>
              </CustomSidebarItem>
              <CustomSidebarItem>
                <StyledNavLink to="/account/orders">Meus pedidos</StyledNavLink>
              </CustomSidebarItem>
              <CustomSidebarItem>
                <StyledNavLink to="/account/edit">Meus dados</StyledNavLink>
              </CustomSidebarItem>
            </SidebarItems>
          </Sidebar>
          <Card>
            profile
          </Card>
        </Wrapper>
      </Container>
    </StyledAccount>
  );
}
