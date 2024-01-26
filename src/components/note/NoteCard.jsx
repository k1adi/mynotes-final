// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function NoteCard({ note }) {
  return (
    <>
      <p>{note.title}</p>
    </>
  );
}

NoteCard.propTypes = {
  note: PropTypes.object.isRequired,
};

export default NoteCard;