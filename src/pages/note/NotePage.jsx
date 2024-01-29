import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import CONFIG from '../../utils/config';
import { ButtonContent, PageContent, ToastContent } from '../../utils/lang-content';
import { addNote, deleteNote, getActiveNotes } from '../../utils/network-data';
import { useAuth, useLocale } from '../../hooks/useContext';

import SearchBar from '../../components/ui/SearchBar';
import NoteModal from '../../components/note/NoteModal';
import NoteWrapper from '../../components/note/NoteWrapper';
import LoaderScreen from '../../components/ui/LoaderScreen';

import { FaPencil } from 'react-icons/fa6';
import { toast } from 'react-toastify';


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
    setIsLoading(true);

    const { error } = await addNote({title, body});

    if(error) {
      toast.error(ToastContent[language].noteCreateFailed, CONFIG.TOAST_EMITTER);
    } else {
      toast.success(ToastContent[language].noteCreateSuccess, CONFIG.TOAST_EMITTER);
    }

    const { data } = await getActiveNotes();

    setNotes(data);
    setIsLoading(false);
    setIsModalShown(false);
  };

  const deleteNoteHandler = async (id) => {
    setIsLoading(true);

    const { error } =  await deleteNote(id);
    if(error) {
      toast.error(ToastContent[language].noteDeleteFailed, CONFIG.TOAST_EMITTER);
    } else {
      toast.success(ToastContent[language].noteDeleteSuccess, CONFIG.TOAST_EMITTER);
    }

    const { data } = await getActiveNotes();
    setNotes(data);

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
              {ButtonContent[language].create}
            </button>
          </div>
          {notes.length !== 0 && (
            <div className="wrapper--search-note">
              <SearchBar keywordHandler={onKeywordChange}/>
            </div>
          )}
          
          <h1 className="text--center">📋 { PageContent[language].noteList }</h1>
          
          <NoteWrapper 
            pageName="note"
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
