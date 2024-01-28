import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useAuth, useLocale } from '../../hooks/useContext';
import { addNote, deleteNote, getActiveNotes } from '../../utils/network-data';

import SearchBar from '../../components/ui/SearchBar';
import NoteModal from '../../components/note/NoteModal';
import NoteWrapper from '../../components/note/NoteWrapper';
import LoaderScreen from '../../components/ui/LoaderScreen';
import { ButtonText } from '../../utils/lang-content';

import { FaPencil } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import CONFIG from '../../utils/config';

const NotePage = () => {
  const navigate = useNavigate();
  const { language } = useLocale();
  const { isUserLoggedIn, userProfile } = useAuth();
  const [notes, setNotes] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isModalShown, setIsModalShown] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || '';
  });

  React.useEffect(() => {
    const fetchActiveNote = async () => {
      const { error, data } = await getActiveNotes();
      if (!error) {
        setNotes(data);
      }

      setIsLoading(false);
    };

    if(isUserLoggedIn){
      fetchActiveNote();
    } else {
      navigate('/login');
      return;
    }
  }, [isUserLoggedIn, navigate]);

  const onKeywordChange = (keyword) => {
    setKeyword(keyword);
    setSearchParams({ keyword });
  };

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(
      keyword.toLowerCase()
    );
  });

  const toggleModalHandler = () => {
    setIsModalShown((prevModalVisibility) => !prevModalVisibility);
  };

  const createNoteHandler = async ({title, body}) => {
    try {
      setIsLoading(true);
      await addNote({title, body});

      const { data } = await getActiveNotes();
      setNotes(data);
      setIsModalShown(false);
    } catch (error) {
      console.error('Error added note:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteNoteHandler = async (id) => {
    setIsLoading(true);

    const { error } =  await deleteNote(id);
    if(!error) {
      toast.success('success to delete note', CONFIG.TOAST_EMITTER);
      const { data } = await getActiveNotes();
      setNotes(data);
    } else {
      toast.error('failed to delete note', CONFIG.TOAST_EMITTER);
    }

    setIsLoading(false);
  };

  const loadingPageHandler = () => {
    setIsLoading((prevIsLoading) => !prevIsLoading);
  };

  return (
    <div className="container--full-width container--padding-y">
      {isLoading ? (
        <LoaderScreen />
      ) : (
        <div className="container--wrap">
          {isModalShown && (
            <NoteModal 
              addNote={createNoteHandler}
              closeModal={toggleModalHandler} 
            />
          )}

          <div className="wrapper--header-note">
            <h1 className="text__welcome">👋 Hi, {userProfile && userProfile.name} </h1>
            <button className="button button--main" onClick={toggleModalHandler}>
              <FaPencil />
              {ButtonText[language].create}
            </button>
          </div>
          {filteredNotes.length !== 0 && (
            <div className="wrapper--search-note">
              <SearchBar keywordHandler={onKeywordChange}/>
            </div>
          )}
          
          <h1 className="text--center">📋 Note List</h1>
          
          <NoteWrapper 
            pageName="Note"
            notes={filteredNotes}
            onLoading={loadingPageHandler}
            onDeleteNote={deleteNoteHandler}
          />
        </div>
      )}
    </div>
  );
};

export default NotePage;
