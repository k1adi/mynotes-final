import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { archiveNote, getNote, unarchiveNote } from '../../utils/network-data';
import { useAuth, useLocale } from '../../hooks/useContext';
import LoaderScreen from '../../components/ui/LoaderScreen';
import showFormattedDate from '../../utils/lang-date';

import { FaArrowLeftLong, FaBookmark, FaBookOpen } from 'react-icons/fa6';

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLocale();
  const { isUserLoggedIn } = useAuth();
  const [ note, setNote ] = React.useState(null);
  const [ error, setError ] = React.useState(null);
  const [ isLoading, setIsLoading ] = React.useState(true);

  React.useEffect(() => {
    const fetchNote = async () => {
      const { error, data } = await getNote(id);
      if (error) {
        setError(error);
      } else {
        setNote(data);
      }
      
      setIsLoading(false);
    };

    if (isUserLoggedIn) {
      fetchNote();
    } else {
      navigate('/login');
      return;
    }
  }, [id, isUserLoggedIn, navigate]);

  React.useEffect(() => {
    if (!isLoading && (error || !note)) {
      navigate('/not-found');
      return;
    }
  }, [isLoading, error, note, navigate]);

  const handleToggleArchive = async () => {
    setIsLoading(true);

    if (note.archived) {
      await unarchiveNote(note.id);
    } else {
      await archiveNote(note.id);
    }

    setNote((prevNote) => ({ ...prevNote, archived: !prevNote.archived }));

    setIsLoading(false); 
  };

  if (note) {
    const labelArchive = note.archived ? 'archive' : 'active';
    const archiveIcon = note.archived ? <FaBookmark /> : <FaBookOpen />;

    return (
      <div className="container--full-width container--padding-y">
        {isLoading ? (
          <LoaderScreen />
        ) : (
          <div className="container--note container--padding-y">
            <div className="card-detail">
              <h3 className='text__heading'> {note.title} </h3>
              <p className='text__date'> { showFormattedDate(note.createdAt, language) } </p>
              <div className='text__desc' dangerouslySetInnerHTML={{ __html: note.body }} />

              <div className="card-detail__footer">
                <button
                  className="button button--back button--large"
                  onClick={() => navigate(-1)}
                >
                  <FaArrowLeftLong /> Back
                </button>
                <button 
                  className={`button button--archive ${labelArchive}`}
                  onClick={handleToggleArchive}
                >
                  {archiveIcon} {labelArchive}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default DetailPage;
