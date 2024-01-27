// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NoteCard({ note, onLoading, deleteNote }) {
  const btnDeleteClicked = () => {
    onLoading();

    setTimeout(() => {
      onLoading();
      deleteNote(note.id);      
    }, 750);
  };

  return (
    <>
      <p>{note.title}</p>
      <Link to={`/note/${note.id}`}>Detail</Link>
      <button onClick={btnDeleteClicked}>Hapus</button>
    </>
  );
}

NoteCard.propTypes = {
  note: PropTypes.object.isRequired,
  onLoading: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default NoteCard;