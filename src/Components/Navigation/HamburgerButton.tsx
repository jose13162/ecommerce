import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonHTMLAttributes } from "react";
import { styled, theme } from "../../stitches.config";

const StyledHamburgerButton = styled("button", {
  width: "2.5rem",
  height: "2.5rem",
  borderRadius: "50%",
  color: theme.colors.$primary.value,
  cursor: "pointer",
  display: "grid",
  placeItems: "center",
  transition: theme.transitions.$baseTransition.value,
  svg: {
    width: "80%",
    height: "80%",
  },
  "&:hover": {
    color: theme.colors.$primaryLighter.value,
  },
});

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function HamburgerButton(props: IProps) {
  return (
    <StyledHamburgerButton {...props}>
      <FontAwesomeIcon icon={faBars} />
    </StyledHamburgerButton>
  );
}
