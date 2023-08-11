import React from 'react';
import PropTypes from 'prop-types';
import { Header, Form, Button, Input } from '../styles/Searchbar';
import { LoaderContainer, Spinner } from '../styles/Loader';

class Searchbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      searchQuery: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
  }

  render() {
    const { isLoading } = this.props;
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          {isLoading ? (
            <LoaderContainer>
              <Spinner />
            </LoaderContainer>
          ) : null}
          <Button type="submit">
            <span>Search</span>
          </Button>
          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.searchQuery}
            onChange={this.handleInputChange}
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Searchbar;
