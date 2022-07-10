import React, { useEffect } from "react";
import ReactDOM from "react-dom";

interface IProps {
  children: React.ReactNode | React.ReactNode[];
  tag: keyof HTMLElementTagNameMap;
  selector: string;
}

export function Portal(props: IProps) {
  const element = document.createElement(props.tag);

  useEffect(() => {
    const hamburgerMenuModal = document.querySelector(props.selector);

    hamburgerMenuModal?.appendChild(element);

    return () => {
      hamburgerMenuModal?.removeChild(element);
    };
  }, []);

  return ReactDOM.createPortal(props.children, element);
}
