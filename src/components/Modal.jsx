import React from 'react';
import PropTypes from 'prop-types';
import { Overlay, ModalContainer } from '../styles/Modal';

function Modal({ image, onClose }) {
  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalContainer onKeyDown={handleKeyDown} tabIndex="0">
        <img src={image} alt="" />
      </ModalContainer>
    </Overlay>
  );
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
