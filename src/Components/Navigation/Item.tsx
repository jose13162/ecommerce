import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, NavLinkProps } from "react-router-dom";
import { useStore } from "zustand";
import { darkTheme, lightTheme, theme, styled } from "../../stitches.config";
import { themeStore } from "../../store/theme";

const NavItem = styled(NavLink, {
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
  "@small": {
    ".label": {
      display: "none",
    },
    svg: {
      width: "75%",
      height: "75%",
    },
  },
});

interface IProps extends NavLinkProps {
  icon: IconDefinition;
  label: string;
}

export function NavigationItem({ icon, label, ...rest }: IProps) {
  const { theme } = useStore(themeStore);

  return (
    <NavItem {...rest} className={theme}>
      <FontAwesomeIcon icon={icon} />
      <p className="label">{label}</p>
    </NavItem>
  );
}
