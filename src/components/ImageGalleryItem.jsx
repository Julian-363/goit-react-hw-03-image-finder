import React from 'react';
import PropTypes from 'prop-types';
import { Item, Image } from '../styles/Item';

function ImageGalleryItem({ webformatURL, largeImageURL, alt, onImageClick }) {
  return (
    <Item onClick={() => onImageClick(largeImageURL)}>
      <Image src={webformatURL} alt={alt} />
    </Item>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
