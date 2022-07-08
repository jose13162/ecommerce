import React, { useEffect } from "react";
import ReactDOM from "react-dom";

interface IProps {
  children: React.ReactNode | React.ReactNode[];
}

export function Portal(props: IProps) {
  const element = document.createElement("div");

  useEffect(() => {
    const hamburgerMenuModal = document.querySelector("#hamburger-menu-modal");

    hamburgerMenuModal?.appendChild(element);

    return () => {
      hamburgerMenuModal?.removeChild(element);
    };
  }, []);

  return ReactDOM.createPortal(props.children, element);
}
