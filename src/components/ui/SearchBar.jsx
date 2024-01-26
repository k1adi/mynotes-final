// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({ keyword, keywordHandler }) {
  return (
    <input
      type="search"
      value={keyword}
      placeholder="Cari Judul Catatan"
      onChange={(event) => keywordHandler(event.target.value)}
    />
  );
}

SearchBar.propTypes = {
  keyword: PropTypes.string,
  keywordHandler: PropTypes.func.isRequired,
};

export default SearchBar;
