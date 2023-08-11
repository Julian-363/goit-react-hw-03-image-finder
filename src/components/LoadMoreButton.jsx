import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from '../styles/Button';
import Loader from './Loader';

class LoadMoreButton extends React.Component {
  render() {
    const { onClick, isDisabled, isLoading } = this.props;
    return isLoading ? (
      <Loader isLoading={isLoading} />
    ) : (
      <StyledButton type="button" onClick={onClick} disabled={isDisabled}>
        Load more
      </StyledButton>
    );
  }
}

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool.isRequired,
};

LoadMoreButton.defaultProps = {
  isDisabled: false,
};

export default LoadMoreButton;
