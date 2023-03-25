// import { Component } from 'react';
import PropTypes from 'prop-types';
// import { toast } from 'react-toastify';
import { FaSearch } from 'react-icons/fa';
import css from './SearchBar.module.css';
import Notiflix from 'notiflix';
import { useState } from 'react';

export const SearchBar = ({ handleFormSubmit }) => {
  const [searchName, setSearchName] = useState('');

  const handleChange = e => {
    const inputValue = e.target.value;
    setSearchName(inputValue);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchName === '') {
      Notiflix.Notify.failure(`Enter a query!`);
      return;
    }

    handleFormSubmit(searchName);
    setSearchName('');
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button type="submit" className={css.button}>
          {/* <span className={css.SearchFormButtonLabel}>Search</span> */}
          <FaSearch size={12}/>
        </button>
        <input
          className={css.input}
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};

export default SearchBar;