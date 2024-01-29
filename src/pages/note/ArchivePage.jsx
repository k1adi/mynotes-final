import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import CONFIG from '../../utils/config';
import { PageContent, ToastContent } from '../../utils/lang-content';
import { deleteNote, getArchivedNotes } from '../../utils/network-data';
import { useAuth, useLocale } from '../../hooks/useContext';

import SearchBar from '../../components/ui/SearchBar';
import NoteWrapper from '../../components/note/NoteWrapper';
import LoaderScreen from '../../components/ui/LoaderScreen';

import { toast } from 'react-toastify';

const ArchivePage = () => {
  const navigate = useNavigate();
  const { language } = useLocale();
  const { isUserLoggedIn } = useAuth();
  const [archived, setArchive] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || '';
  });

  React.useEffect(() => {
    const fetchArchiveNote = async () => {
      const { error, data } = await getArchivedNotes();
      if (!error) {
        setArchive(data);
      }

      setIsLoading(false);
    };

    if(isUserLoggedIn){
      fetchArchiveNote();
    } else {
      navigate('/login');
      return;
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
    setIsLoading(true);

    const { error } =  await deleteNote(id);
    if(error) {
      toast.error(ToastContent[language].archiveDeleteFailed, CONFIG.TOAST_EMITTER);
    } else {
      toast.success(ToastContent[language].archiveDeleteSuccess, CONFIG.TOAST_EMITTER);
    }

    const { data } = await getArchivedNotes();
    setArchive(data);

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
          {archived.length !== 0 && (
            <div className="wrapper--search-note">
              <SearchBar keywordHandler={onKeywordChange}/>
            </div>
          )}

          <h1 className="text--center">📂 { PageContent[language].archiveList }</h1>

          <NoteWrapper 
            pageName="archive" 
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
