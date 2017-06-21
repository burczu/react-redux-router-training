import React from 'react';
import PropTypes from 'prop-types';

const Loader = (props) => {
  return props.isLoading ? <div>Ładowanie...</div> : props.children;
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default Loader;
