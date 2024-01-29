// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useLocale } from '../../hooks/useContext';
import showFormattedDate from '../../utils/lang-date';
import { ButtonContent, SwalContent } from '../../utils/lang-content';

import Swal from 'sweetalert2';
import { FaTrashCan } from 'react-icons/fa6';

function NoteCard({ note, onLoading, deleteNote }) {
  const { language } = useLocale();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/note/${note.id}`);
  };

  const btnDeleteClicked = () => {
    Swal.fire({
      icon: 'warning',
      title: SwalContent[language].title,
      text: SwalContent[language].text,
      showCancelButton: true,
      confirmButtonText: SwalContent[language].confirmButton,
      cancelButtonText: SwalContent[language].cancelButton,
      confirmButtonColor: '#DC3545',
    }).then((result) => {
      if(result.isConfirmed){
        onLoading();

        setTimeout(() => {
          onLoading();
          deleteNote(note.id);      
        }, 1250);
      }
    });
  };

  const description = note.body.replace(/<[^>]*>/g, '');

  return (
    <div className='card__note'>
      <div className='card__note__body' onClick={handleClick}>
        <h3 className='text__title'> { note.title } </h3>
        <p className='text__date'> 📅 { showFormattedDate(note.createdAt, language ) } </p>
        <p className='text__desc'> { description.length > 150 ? 
          `${description.substring(0, 150)}...` : description
        } 
        </p>
      </div>
      <div className='card__note__footer'>
        <button
          className="button button--delete"
          onClick={btnDeleteClicked}
        > 
          <FaTrashCan />
          { ButtonContent[language].delete }
        </button>
      </div>
    </div>
  );
}

NoteCard.propTypes = {
  note: PropTypes.object.isRequired,
  onLoading: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
};

export default NoteCard;