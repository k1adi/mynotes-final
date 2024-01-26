import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import { getArchivedNotes } from '../../utils/network-data';

import SearchBar from '../../components/ui/SearchBar';
import NoteWrapper from '../../components/note/NoteWrapper';

const ArchivePage = () => {
  const navigate = useNavigate();
  const userAuth = React.useContext(AuthContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [archived, setArchive] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || '';
  });

  React.useEffect(() => {
    if(userAuth === null) {
      navigate('/login');
      return;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAuth]);

  React.useEffect(() => {
    getArchivedNotes().then(({ data }) => {
      setArchive(data);
    });
  }, []);

  function onKeywordChange(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredArchive = archived.filter((archive) => {
    return archive.title.toLowerCase().includes(
      keyword.toLowerCase()
    );
  });

  if(userAuth === null){
    return null;
  }

  return (
    <div className='container--wrap'>
      <p>Archive Page</p>
      <div>
        <SearchBar keywordHandler={onKeywordChange}/>
        <NoteWrapper pageName="Archive" notes={filteredArchive} />
      </div>
    </div>
  );
};

export default ArchivePage;
