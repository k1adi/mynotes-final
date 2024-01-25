import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const ArchivePage = () => {
  const navigate = useNavigate();
  const userAuth = React.useContext(AuthContext);

  React.useEffect(() => {
    if(userAuth === null) {
      navigate('/login');
      return;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAuth]);

  return (
    <div className='container--wrap'>
      <p>Archive Page</p>
    </div>
  );
};

export default ArchivePage;
