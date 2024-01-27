import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useAuth } from '../../hooks/useContext';
import { addNote, deleteNote, getActiveNotes } from '../../utils/network-data';

import SearchBar from '../../components/ui/SearchBar';
import NoteModal from '../../components/note/NoteModal';
import NoteWrapper from '../../components/note/NoteWrapper';
import LoaderScreen from '../../components/ui/LoaderScreen';

const NotePage = () => {
  const navigate = useNavigate();
  const { isUserLoggedIn } = useAuth();
  const [notes, setNotes] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isModalShown, setIsModalShown] = React.useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || '';
  });

  React.useEffect(() => {
    if(isUserLoggedIn){
      getActiveNotes().
        then(({ data }) => {
          setNotes(data);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      navigate('/login');
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
    try {
      setIsLoading(true);
      await deleteNote(id);

      const { data } = await getActiveNotes();
      setNotes(data);
    } catch (error) {
      console.error('Error deleting note:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadingPageHandler = () => {
    setIsLoading((prevIsLoading) => !prevIsLoading);
  };

  if(!isUserLoggedIn){
    return null;
  }

  if(isLoading){
    return <LoaderScreen />;
  }

  return (
    <div className='container--wrap'>
      {isModalShown && (
        <NoteModal 
          addNote={createNoteHandler}
          closeModal={toggleModalHandler} 
        />
      )}

      <p>Note Page <span onClick={toggleModalHandler}>Tambah</span> </p>
      <SearchBar keywordHandler={onKeywordChange}/>
      <NoteWrapper 
        pageName="Note"
        notes={filteredNotes}
        onLoading={loadingPageHandler}
        onDeleteNote={deleteNoteHandler}
      />
    </div>
  );
};

export default NotePage;
