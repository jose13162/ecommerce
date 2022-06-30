import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkHTMLAttributes } from "react";
import { useStore } from "zustand";
import { darkTheme, lightTheme, theme, styled } from "../../stitches.config";
import { themeStore } from "../../store/theme";

const NavItem = styled("a", {
  height: "2.5rem",
  borderRadius: "50%",
  color: theme.colors.$primary.value,
  textDecoration: "none",
  cursor: "pointer",
  display: "grid",
  gridTemplateColumns: "2.5rem max-content",
  gap: "0.25rem",
  placeItems: "center",
  placeContent: "center",
  transition: theme.transitions.$baseTransition.value,
  svg: {
    width: "60%",
    height: "60%",
  },
  "&:hover": {
    color: theme.colors.$primaryLighter.value,
  },
  "&.dark-theme": {
    ".label": {
      color: darkTheme.colors.$textColor.value,
    },
  },
  "&.light-theme": {
    ".label": {
      color: lightTheme.colors.$textColor.value,
    },
  },
});

interface IProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  icon: IconDefinition;
  label?: string;
}

export function NavigationItem(props: IProps) {
  const { theme } = useStore(themeStore);

  return (
    <NavItem {...props} className={theme}>
      <FontAwesomeIcon icon={props.icon} />
      {props.label && <p className="label">{props.label}</p>}
    </NavItem>
  );
}
