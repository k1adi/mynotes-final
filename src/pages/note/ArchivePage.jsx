import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useAuth } from '../../hooks/useContext';
import { deleteNote, getArchivedNotes } from '../../utils/network-data';

import SearchBar from '../../components/ui/SearchBar';
import NoteWrapper from '../../components/note/NoteWrapper';
import LoaderScreen from '../../components/ui/LoaderScreen';

const ArchivePage = () => {
  const navigate = useNavigate();
  const { isUserLoggedIn } = useAuth();
  const [archived, setArchive] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || '';
  });

  React.useEffect(() => {
    if(isUserLoggedIn){
      getArchivedNotes().
        then(({ data }) => {
          setArchive(data);
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

  function onKeywordChange(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredArchive = archived.filter((archive) => {
    return archive.title.toLowerCase().includes(
      keyword.toLowerCase()
    );
  });

  const deleteNoteHandler = async (id) => {
    try {
      setIsLoading(true);
      await deleteNote(id);

      const { data } = await getArchivedNotes();
      setArchive(data);
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

  return (
    <div className="container--full-width container--padding-y">
      {isLoading ? (
        <LoaderScreen />
      ) : (
        <div className="container--wrap">
          {filteredArchive.length !== 0 && (
            <div className="wrapper--search-note">
              <SearchBar keywordHandler={onKeywordChange}/>
            </div>
          )}

          <h1 className="text--center">📂 Archive List</h1>

          <NoteWrapper 
            pageName="Archive" 
            notes={filteredArchive}
            onLoading={loadingPageHandler}
            onDeleteNote={deleteNoteHandler}
          />
        </div>
      )}
    </div>
  );
};

export default ArchivePage;
