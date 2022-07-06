import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLinkProps } from "react-router-dom";
import { StyledNavigationItem } from "./styles";

interface IProps extends NavLinkProps {
  icon: IconDefinition;
  label: string;
}

export function NavigationItem({ icon, label, ...rest }: IProps) {
  return (
    <StyledNavigationItem {...rest}>
      <FontAwesomeIcon icon={icon} />
      <p className="label">{label}</p>
    </StyledNavigationItem>
  );
}
