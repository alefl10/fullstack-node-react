import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ message }) => (
  <h1 className="Header text-center">
    {message}
  </h1>
);

Header.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Header;
