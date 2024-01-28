// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ keyword, keywordHandler }) {
  return (
    <div className="form__wrapper">
      <input
        type="search"
        value={keyword}
        className="form--input"
        placeholder="🔍 Cari Judul Catatan"
        onChange={(event) => keywordHandler(event.target.value)}
      />
    </div>
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string,
  keywordHandler: PropTypes.func.isRequired,
};

export default SearchBar;
