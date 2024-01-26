// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import NoteCard from './NoteCard';

function NoteWrapper({ pageName, notes }) {
  return (
    <>
      { notes.length !== 0 ? 
        notes.map(item => (
          <NoteCard
            key={item.id} 
            note={item}
          />
        ))
        :
        <p>{pageName} is empty</p>
      }
    </>
  );
}

NoteWrapper.propTypes = {
  pageName: PropTypes.string.isRequired,
  notes: PropTypes.array.isRequired
};

export default NoteWrapper;
