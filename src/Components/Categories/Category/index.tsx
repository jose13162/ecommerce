import { NavLinkProps } from "react-router-dom";
import { StyledCategory } from "./styles";

interface IProps extends NavLinkProps {
  category: string;
}

export function Category({ category, ...rest }: IProps) {
  return <StyledCategory {...rest}>{category}</StyledCategory>;
}
