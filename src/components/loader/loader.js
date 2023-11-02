import React from 'react';
import PropTypes from 'prop-types';
import { PulseLoader } from 'react-spinners';

const Loader = ({ isLoading }) => (
  <PulseLoader
    color="#36d7b7"
    loading={isLoading}
  />
);
Loader.propTypes = {
  isLoading: PropTypes.string,
}.isRequired;

export default Loader;
