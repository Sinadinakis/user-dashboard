import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = ({ title }) => (
  <nav className="navbar">
    <div className="container">
      <Link to="/" className="navbar__item">
        Logo
      </Link>
      <div className="navbar__menu">
        <Link to="/" className="navbar__item">
          Hulp bij uw ondernem
        </Link>
        <Link to="/" className="navbar__item">
          Over ons
        </Link>
      </div>
    </div>
  </nav>
);

Header.defaultProps = {
  title: "Assignment",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
