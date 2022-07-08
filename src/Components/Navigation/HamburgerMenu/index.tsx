import { BaseHTMLAttributes, forwardRef } from "react";
import { NavLink } from "react-router-dom";
import {
  HamburgerMenuItem,
  HamburgerMenuItems,
  StyledHamburgerMenu,
} from "./styles";

export const HamburgerMenu = forwardRef<
  HTMLBaseElement,
  BaseHTMLAttributes<HTMLBaseElement>
>((props, ref) => {
  return (
    <StyledHamburgerMenu {...props} ref={ref}>
      <HamburgerMenuItems>
        <HamburgerMenuItem>
          <NavLink to="/account">Meu perfil</NavLink>
        </HamburgerMenuItem>
        <HamburgerMenuItem>
          <NavLink to="/cart">Carrinho</NavLink>
        </HamburgerMenuItem>
      </HamburgerMenuItems>
    </StyledHamburgerMenu>
  );
});
