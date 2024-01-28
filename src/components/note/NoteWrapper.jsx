// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import NoteCard from './NoteCard';

function NoteWrapper({ pageName, notes, onLoading, onDeleteNote }) {
  return (
    <div className='card__wrapper'>
      { notes.length !== 0 ? 
        notes.map(item => (
          <NoteCard
            key={item.id} 
            note={item}
            onLoading={onLoading}
            deleteNote={onDeleteNote}
          />
        ))
        :
        <div className='card__message'>
          {pageName} is empty
        </div>
      }
    </div>
  );
}

NoteWrapper.propTypes = {
  notes: PropTypes.array.isRequired,
  pageName: PropTypes.string.isRequired,
  onLoading: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
};

export default NoteWrapper;
