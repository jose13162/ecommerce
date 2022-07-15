import { CustomSidebarItem, SidebarItems, StyledNavLink, StyledSidebar } from "./styles";

export function Sidebar() {
  return (
    <StyledSidebar>
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
    </StyledSidebar>
  );
}
