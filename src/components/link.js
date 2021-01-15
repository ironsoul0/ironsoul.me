import React from "react";
import PropTypes from "prop-types";

export const Link = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
};
