import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { archiveNote, getNote, unarchiveNote } from '../../utils/network-data';
import { useAuth } from '../../hooks/useContext';
import LoaderScreen from '../../components/ui/LoaderScreen';


const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isUserLoggedIn } = useAuth();
  const [note, setNote] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchNote = async () => {
      try {
        const { data } = await getNote(id);
        setNote(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (isUserLoggedIn) {
      fetchNote();
    } else {
      navigate('/login');
    }
  }, [id, isUserLoggedIn, navigate]);

  React.useEffect(() => {
    if (!isLoading && (error || !note)) {
      navigate('/not-found');
    }
  }, [isLoading, error, note, navigate]);

  if(!isUserLoggedIn){
    return null;
  }

  if (isLoading) {
    return <LoaderScreen />;
  }

  const handleToggleArchive = async () => {
    try {
      setIsLoading(true);

      if (note.archived) {
        await unarchiveNote(note.id);
      } else {
        await archiveNote(note.id);
      }
  
      setNote((prevNote) => ({ ...prevNote, archived: !prevNote.archived }));
    } catch (error) {
      console.error('Gagal mengubah status archived:', error);
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div>
      <h2>Note Detail</h2>
      <p onClick={handleToggleArchive}>{note.archived ? 'archive' : 'active'}</p>
      <pre>{JSON.stringify(note, null, 2)}</pre>

      <p onClick={() => navigate(-1)}>Kembali</p>
    </div>
  );
};

export default DetailPage;
