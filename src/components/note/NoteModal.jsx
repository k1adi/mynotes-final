// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


function NoteModal({ addNote, closeModal }) {
  const [titleNote, setTitleNote] = React.useState('');
  const [bodyNote, setBodyNote] = React.useState('');
  const [lengthTitle, setLengthTitle] = React.useState(0);

  const onTitleChange = (event) => {
    const currentValue = event .target.value;
    if (currentValue.length <= 50) {
      setTitleNote(currentValue);
      setLengthTitle(currentValue.length);
    }
  };

  const onQuillChange = (value) => {
    setBodyNote(value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    addNote({title: titleNote, body: bodyNote});
  };

  return (
    <>
      <p>Note Modal <span onClick={closeModal}>Tutup</span></p>
      <form onSubmit={onSubmitHandler}>
        <input 
          type="text"
          value={titleNote}
          placeholder="judul catatan"
          onChange={onTitleChange}
          maxLength={50}
        />
        <p>{lengthTitle}/50</p>
        <ReactQuill
          value={bodyNote}
          onChange={onQuillChange}
          placeholder='Note Description...'
        />
        <button>Submit</button>
      </form>
    </>
  );
}

NoteModal.propTypes = {
  addNote: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default NoteModal;
