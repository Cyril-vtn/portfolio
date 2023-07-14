import React from "react";
import "./Container.scss";

/**
 * Container component.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The child components.
 * @returns {ReactElement} The container component.
 */
const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
