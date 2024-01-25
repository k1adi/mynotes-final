import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const userAuth = React.useContext(AuthContext);

  React.useEffect(() => {
    if(userAuth === null) {
      navigate('/login');
      return;
    }

    if (id != 123) {
      navigate('/not-found');
      return;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAuth, id]);

  if(userAuth === null){
    return null;
  }

  return (
    <div className='container--wrap'>
      <p>Detail Page</p>
    </div>
  );
};

export default DetailPage;
