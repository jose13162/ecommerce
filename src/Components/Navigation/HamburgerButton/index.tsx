import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ButtonHTMLAttributes } from "react";
import { StyledHamburgerButton } from "./styles";

export default function (props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <StyledHamburgerButton {...props}>
      <FontAwesomeIcon icon={faBars} />
    </StyledHamburgerButton>
  );
}
