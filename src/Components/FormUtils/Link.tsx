import { NavLink, NavLinkProps } from "react-router-dom";
import { styled, theme } from "../../stitches.config";

interface IProps extends NavLinkProps {
  text: string;
}

const StyledLink = styled(NavLink, {
  width: "max-content",
  color: theme.colors.$primary.value,
  textDecoration: "none",
  transition: theme.transitions.$baseTransition.value,
  "&:hover": {
    color: theme.colors.$primaryLighter.value,
  },
});

export default function({ text, ...rest }: IProps) {
  return <StyledLink {...rest}>{text}</StyledLink>;
}
