import { NavLinkProps } from "react-router-dom";
import { CustomSidebarItem, StyledNavLink } from "./styles";

interface IProps extends NavLinkProps {
  category: string;
}

export function Category({ category, ...rest }: IProps) {
  return (
    <CustomSidebarItem>
      <StyledNavLink {...rest}>{category}</StyledNavLink>
    </CustomSidebarItem>
  );
}
