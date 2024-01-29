// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function Banner ({ image, title, desc }) {
  return (
    <div className="banner__wrapper">
      <img src={image} alt={title} className="banner__image" />

      <div className="banner__content">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default Banner;