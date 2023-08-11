import React from 'react';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './LoadMoreButton';
import Loader from './Loader';
import Modal from './Modal';
import { fetchImages } from '../utils/fetchImages';

class App extends React.Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    showModal: false,
    selectedImage: '',
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery, page: 1, images: [] });
  };

  fetchImages = async () => {
    const { searchQuery, page } = this.state;
    const images = await fetchImages(searchQuery, page);

    this.setState(prevState => ({
      images: [...prevState.images, ...images],
      page: prevState.page + 1,
      isLoading: false,
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleImageClick = selectedImage => {
    this.setState({ selectedImage });
    this.toggleModal();
  };

  handleLoadMore = () => {
    this.setState({ isLoading: true });
    this.fetchImages();
  };

  handleModalClose = () => {
    this.toggleModal();
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown, false);
  }

  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.handleModalClose();
    }
  };

  render() {
    const { images, isLoading, showModal, selectedImage } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} isLoading={isLoading} />
        <Loader isLoading={isLoading && <Loader />} />
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {images.length > 0 && (
          <Button onClick={this.handleLoadMore} isLoading={isLoading} />
        )}
        {showModal && (
          <Modal image={selectedImage} onClose={this.handleModalClose} />
        )}
      </div>
    );
  }
}

export default App;
