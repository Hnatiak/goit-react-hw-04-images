import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { FaSearch } from 'react-icons/fa';
import css from './SearchBar.module.css';

class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  // onChangeInput = e => {
  //   const query = e.currentTarget.value;
  
  //   if (query !== this.state.query && this.props.onSubmit) {
  //     this.props.onSubmit('');
  //   }
  
  //   this.setState({ query });
  // };

  onChangeInput = e => {
    const query = e.currentTarget.value;
  
    if (query !== this.state.query && this.props.onSubmit) {
      this.props.onSubmit('');
    }
  
    this.setState({ query, isLoading: query !== '' });
  };

  onSubmitForm = e => {
    e.preventDefault();

    const { onSubmit } = this.props;
    const { query } = this.state;

    if (query.trim() === '') {
      toast.error('Enter a search term.');
      return;
    }

    onSubmit(query);
  };

  render() {
    const { query } = this.state;

    return (
      <header className={css.header}>
        <form className={css.form} onSubmit={this.onSubmitForm}>
          <button className={css.button} type="submit">
            <FaSearch size={12} />
          </button>

          <input
            className={css.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.onChangeInput}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;