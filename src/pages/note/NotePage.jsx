import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import { getActiveNotes } from '../../utils/network-data';

import SearchBar from '../../components/ui/SearchBar';
import NoteWrapper from '../../components/note/NoteWrapper';

const NotePage = () => {
  const navigate = useNavigate();
  const userAuth = React.useContext(AuthContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || '';
  });

  React.useEffect(() => {
    if(userAuth === null){
      navigate('/login');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAuth]);

  React.useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  function onKeywordChange(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(
      keyword.toLowerCase()
    );
  });

  if(userAuth === null){
    return null;
  }

  return (
    <div className='container--wrap'>
      <p>Note Page</p>
      <div>
        <SearchBar keywordHandler={onKeywordChange}/>
        <NoteWrapper pageName="Note" notes={filteredNotes} />
      </div>
    </div>
  );
};

export default NotePage;
