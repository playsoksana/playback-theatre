import React from "react";
// import PropTypes from 'prop-types';

import Logo from "../Logo";

import "./Footer.module.css";

const Footer = ({ test }) => (
  <footer>
    <Logo />
  </footer>
);

// Footer.propTypes = {
//     test: PropTypes.string.isRequired };

Footer.defaultProps = {
  test: "6874522",
};

export default Footer;
