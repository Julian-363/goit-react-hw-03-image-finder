import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';

import { Gallery } from '../styles/Gallery';

class ImageGallery extends React.Component {
  static propTypes = {
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        alt: PropTypes.string, // Cambiamos la prop "alt" a opcional
      })
    ).isRequired,
    onImageClick: PropTypes.func.isRequired,
  };

  render() {
    const { images, onImageClick } = this.props;

    return (
      <Gallery>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
            alt={image.alt}
            onImageClick={() => onImageClick(image.largeImageURL)}
          />
        ))}
      </Gallery>
    );
  }
}

export default ImageGallery;
