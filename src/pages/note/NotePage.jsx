import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const NotePage = () => {
  const navigate = useNavigate();
  const userAuth = React.useContext(AuthContext);

  console.log(`note page with auth ${userAuth}`);

  React.useEffect(() => {
    if(userAuth === null){
      navigate('/login');
      return;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAuth]);

  if(userAuth === null){
    return null;
  }
  
  return (
    <div className='container--wrap'>
      <p>Note Page</p>
    </div>
  );
};

export default NotePage;
