import React from 'react';
import PropTypes from 'prop-types';
import { LoaderContainer, Spinner } from '../styles/Loader';

function Loader(props) {
  const { isLoading } = props;

  return isLoading ? (
    <LoaderContainer>
      <Spinner />
    </LoaderContainer>
  ) : null;
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
Loader.defaultProps = {
  isLoading: false,
};

export default Loader;
