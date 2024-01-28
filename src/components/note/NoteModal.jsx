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
    <div className="modal__wrapper">
      <div className="modal__content">
        <div className="modal__card">
          <div className="modal__card__header">
            <h2 className="modal__card__title"> Add Note</h2>
            <button 
              className="modal__card__close"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>

          <div className="modal__card__body">
            <form 
              className="form__wrapper"
              onSubmit={onSubmitHandler}
            >
              <div className="input-wrapper">
                <label htmlFor="noteTitle">Title</label>
                <input 
                  type='text'
                  name='noteTitle'
                  id='noteTitle'
                  placeholder='Note title...'
                  className='form--input'
                  value={titleNote}
                  onChange={onTitleChange}
                  required
                />
                <small className='form--help'>
                  <span>{lengthTitle}</span>/50
                </small>
              </div>

              <div className='input-wrapper'>
                <label htmlFor="noteDesc">Description</label>
                <ReactQuill
                  value={bodyNote}
                  onChange={onQuillChange}
                  placeholder="Note Description..."
                />
              </div>

              <div className="form__button">
                <input type="submit" className="button button--main" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div> 
  );
}

NoteModal.propTypes = {
  addNote: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
};

export default NoteModal;
