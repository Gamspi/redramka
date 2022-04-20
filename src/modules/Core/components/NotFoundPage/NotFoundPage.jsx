import React, {useEffect} from 'react';
import './NotFoundPage.scss';
import {useNavigate} from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/redramka', {replace: true});
    }, 3000);
  }, []);
  return (
    <div className="not-found-page">
      <h2 className="not-found-page__title">404 </h2>
      <div className="not-found-page__text">
        <p> Not Found Page</p>
        <p>You will be redirected to the home page</p>
      </div>
    </div>
  );
};

export default React.memo(NotFoundPage);
